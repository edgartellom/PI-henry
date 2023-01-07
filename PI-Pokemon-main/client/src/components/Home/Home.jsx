import React from "react";
import { Link } from 'react-router-dom';
//import hooks gonna use from react
import { useEffect, useState } from "react";
//import hooks from react-redux (previously install it --> npm i react-redux)
import { useDispatch, useSelector } from "react-redux";
//import actions gonna use in this component
import { getPokemons} from "../../actions";
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
    // eslint-disable-next-line no-unused-vars
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    // eslint-disable-next-line no-unused-vars
    const [propOrder, setPropOrder] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [order, setOrder] = useState('');
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
            <Link to='/pokemon'><button>Create pokemon</button></Link>
            <h1>Gotta Catch 'Em All!</h1>
            <button onClick={e => handleClick(e)}>
                Reload all pokemons
            </button>
            <SearchBar 
                setCurrentPage={setCurrentPage}
            />
            <SortFilter
                setCurrentPage={setCurrentPage}
                setPropOrder={setPropOrder}
                setOrder={setOrder}
            />
            <Paginated 
                pokemonsPerPage={pokemonsPerPage}
                allPokemons={allPokemons.length}
                paginated={paginated}
            />
            <Cards pokemons={currentPokemons} />
        </div>
    )
}

export default Home