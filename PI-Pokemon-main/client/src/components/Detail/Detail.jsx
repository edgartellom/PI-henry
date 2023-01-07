import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../actions";
import { useEffect } from "react";
import { pokeDetail, capitalize, detailBg } from './Detail.module.css'

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id));
    },[dispatch, id])

    const myPokemon = useSelector(state => state.detail)

    return (
        <div className={detailBg}>
            {
                myPokemon.length > 0 ?
                <div className={pokeDetail}>
                    <h1 className={capitalize}>{myPokemon[0].name}</h1>
                    <img src={myPokemon[0].image? myPokemon[0].image.detail : myPokemon[0].img} alt="" width="200px" height="250px"/>
                    <p>Nº: {myPokemon[0].id}</p>
                    <div>
                        <div className={capitalize}>
                            <span>Type:</span>
                            {myPokemon[0].types.map( (t,i) => (<span key={i}> {t.name} </span>))}
                        </div>
                        <div>
                            <span>Height: {(myPokemon[0].height ? myPokemon[0].height/10 : myPokemon[0].height).toFixed(1)} m </span>
                            <span>Weight: {(myPokemon[0].weight ? myPokemon[0].weight/10 : myPokemon[0].weight).toFixed(1)} kg </span>
                        </div>
                        <h2>Stats:</h2>
                        <p>HP: {myPokemon[0].hp}</p>
                        <p>Attack: {myPokemon[0].attack}</p>
                        <p>Defense: {myPokemon[0].defense}</p>
                        <p>Speed: {myPokemon[0].speed}</p>
                    </div>
                </div> : 
                <p className={pokeDetail}>Loading...</p>
            }
            <Link to='/home'><button>Return</button></Link>
        </div>
    )
        
    
}

export default Detail
