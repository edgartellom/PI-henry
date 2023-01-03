import React from "react";
import { Link } from 'react-router-dom';
//import hooks gonna use from react
import { useEffect, useState } from "react";
//import hooks from react-redux (previously install it --> npm i react-redux)
import { useDispatch, useSelector } from "react-redux";
//import actions gonna use in this component
import { getPokemons, filterByType, filterCreated, sortByName, sortByAttack } from "../../actions";
//import components gonna use
import Cards from "../Cards/Cards";
import Paginated from "../Paginated/Paginated"
import SortFilter from "../SortFilter/SortFilter";
import SearchBar from "../SearchBar/SearchBar";
//import styles from module.css
import { homeBg } from "./Home.module.css";


function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [orderName, setOrderName] = useState('');
    const [orderAttack, setOrderAttack] = useState('');
    const indexOfLastPokemon = currentPage * pokemonsPerPage; //12
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //0
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginated = (pagNumber) => {
        setCurrentPage(pagNumber)
    }

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
    }

    

    return(
        <div className={homeBg}>
            <Link to='/pokemon'>Create pokemon</Link>
            <h1>Gotta Catch 'Em All!</h1>
            <button onClick={e => handleClick(e)}>
                Load all pokemons again
            </button>
            <SortFilter
                setCurrentPage={setCurrentPage}
                setOrderName={setOrderName}
                setOrderAttack={setOrderAttack}
            />
            <Paginated 
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginated={paginated}
            />
            <SearchBar 
                setCurrentPage={setCurrentPage}
            />
            <Cards pokemons={currentPokemons} />
        </div>
    )
}

export default Home