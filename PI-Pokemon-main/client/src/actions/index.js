import axios from "axios";

import { 
    GET_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL,
    GET_TYPES,
    FILTER_BY_TYPE, 
    FILTER_CREATED,
    SORT_BY_PROP, 
    SORTING_ORDER,

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

export function getPokemonDetail(id) {
    return async (dispatch) => {
        try {
            var json = await axios(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type: GET_POKEMON_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTypes() {
    return async (dispatch) => {
        try {
            var json = await axios(`http://localhost:3001/types`)
            return dispatch({
                type: GET_TYPES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postPokemon(payload) {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', payload);
            console.log(response);
            return response;
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

export function sortByProp(payload){
    return {
        type: SORT_BY_PROP,
        payload
    }
}

export function sortingOrder(payload){
    return {
        type: SORTING_ORDER,
        payload
    }
}
