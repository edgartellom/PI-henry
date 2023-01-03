import { 
    GET_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL, 
    FILTER_BY_TYPE, 
    FILTER_CREATED, 
    SORT_BY_NAME, 
    SORT_BY_ATACK,
    
} from "../action-types";

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: []
}

function rootReducer(state=initialState, action){
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
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
        case SORT_BY_NAME:
            let sortedName = action.payload === 'asc' ?
                state.pokemons.sort((a,b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                }) :
                state.pokemons.sort((a,b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                })
            return {
                ...state,
                pokemons: sortedName
            }
            case SORT_BY_ATACK:
            let sortedAttack = action.payload === 'ascAtt' ?
                state.pokemons.sort((a,b) => {
                    if (a.attack > b.attack) return 1;
                    if (a.attack < b.attack) return -1;
                    return 0;
                }) :
                state.pokemons.sort((a,b) => {
                    if (a.attack > b.attack) return -1;
                    if (a.attack < b.attack) return 1;
                    return 0;
                })
            return {
                ...state,
                pokemons: sortedAttack
            }
            case GET_POKEMON_BY_NAME:
                return {
                    ...state,
                    pokemons: action.payload
                }
        default: 
            return state
    }
}

export default rootReducer;