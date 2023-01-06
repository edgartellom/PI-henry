import { 
    GET_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL,
    GET_TYPES,
    POST_POKEMON, 
    FILTER_BY_TYPE, 
    FILTER_CREATED, 
    SORT_BY_PROP, 
    SORTING_ORDER,
    
} from "../action-types";

const initialState = {
    pokemons: [],
    allPokemons: [],
    prop: '',
    order: '',
    types: []
}

function rootReducer(state=initialState, action){
    const sortPokemons = (pokemons, prop, order) => {
        if (order === 'asc'){
            return (pokemons.sort((a,b) => {
                if (a[prop] > b[prop]) return 1;
                if (a[prop] < b[prop]) return -1;
                return 0;
            }))
        }
        if (order === 'desc'){
            return (pokemons.sort((a,b) => {
                if (a[prop] > b[prop]) return -1;
                if (a[prop] < b[prop]) return 1;
                return 0;
            }))
        }
    }
    
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        
        case POST_POKEMON:
            return {
                ...state,
            }
        
        case FILTER_BY_TYPE:
            const allPokemons = state.allPokemons;
            const filterByType = (types) => {
                for(let type of types){
                    if (type.name === action.payload){
                        return true
                    }
                }
            }
            const pokemonsFiltered = allPokemons.filter(e => filterByType(e.types));
            const statusFiltered = action.payload === 'All' ? allPokemons : pokemonsFiltered
            return {
                ...state,
                pokemons: statusFiltered
            } 
        
        case FILTER_CREATED:
            const allPokemons2 = state.allPokemons;
            const createdFilter = () => {
                if (action.payload === 'All'){
                    return allPokemons2
                } else if (action.payload === 'created'){
                    return allPokemons2.filter(e => e.createdInDb)
                } else {
                    return allPokemons2.filter(e => !e.createdInDb)
                }
            }
            return {
                ...state,
                pokemons: createdFilter() 
            }

        case SORT_BY_PROP: 
            state.prop = action.payload
            console.log(sortPokemons(state.pokemons, state.prop&&state.prop, state.order&&state.order))
            return {
                ...state,
                prop: action.payload,
            }

        case SORTING_ORDER:  
            state.order = action.payload    
            console.log(sortPokemons(state.pokemons, state.prop&&state.prop, state.order&&state.order))
            return {
                ...state,
                order: action.payload,
            }
        
        
        
        default: 
            return state
    }
}

export default rootReducer;