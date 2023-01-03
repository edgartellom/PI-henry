import axios from "axios";

import { 
    GET_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL, 
    FILTER_BY_TYPE, 
    FILTER_CREATED,
    SORT_BY_NAME, 
    SORT_BY_ATACK,

} from "../action-types";

export function getPokemons() {
    return async (dispatch) => {
        try {
            var json = await axios("http://localhost:3001/pokemons");
            return dispatch({
                type: GET_POKEMONS, 
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPokemonByName(name) {
    return async (dispatch) => {
        try {
            var json = await axios(`http://localhost:3001/pokemons/?name=${name}`)
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterByType(payload) {
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function sortByName(payload){
    return {
        type: SORT_BY_NAME,
        payload
    }
}

export function sortByAttack(payload){
    return {
        type: SORT_BY_ATACK,
        payload
    }
}