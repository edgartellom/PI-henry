import React from "react";
import { useDispatch } from "react-redux";
import { filterByType, filterCreated, sortByName, sortByAttack } from "../../actions"

function SortFilter({setCurrentPage, setOrderName, setOrderAttack}){
    const dispatch = useDispatch();
    
    function handleFilterByType(e){
        dispatch(filterByType(e.target.value));
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value));
    }

    function handleSortByName(e){
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setOrderName(`Sorted ${e.target.value}`)
    }

    function handleSortByAttack(e){
        e.preventDefault();
        dispatch(sortByAttack(e.target.value));
        setCurrentPage(1);
        setOrderAttack(`Sorted ${e.target.value}`)
    }
    
    return (
            <div>
                <div>
                    <label>Sort By Name:
                        <select onChange={e => handleSortByName(e)}>
                            <option value="" disabled selected>Select order</option>
                            <option value='asc'>Ascendant</option>
                            <option value='desc'>Descendant</option>
                        </select>
                    </label>
                    <label>Sort By Attack:
                        <select onChange={e => handleSortByAttack(e)}>
                            <option value="" disabled selected>Select order</option>
                            <option value='ascAtt'>Ascendant</option>
                            <option value='descAtt'>Descendant</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Filter by Type:
                        <select onChange={e => handleFilterByType(e)}>
                            <option value="" disabled selected>Select type</option>
                            <option value ='All'>All</option>
                            <option value ='normal'>Normal</option>
                            <option value='fighting'>Fighting</option>
                            <option value ='flying'>Flying</option>
                            <option value ='poison'>Poison</option>
                            <option value='ground'>Ground</option>
                            <option value ='rock'>Rock</option>
                            <option value ='bug'>Bug</option>
                            <option value='ghost'>Ghost</option>
                            <option value ='steel'>Steel</option>
                            <option value ='fire'>Fire</option>
                            <option value='water'>Water</option>
                            <option value ='grass'>Grass</option>
                            <option value ='electric'>Electric</option>
                            <option value='psychic'>Psychic</option>
                            <option value ='ice'>Ice</option>
                            <option value ='dragon'>Dragon</option>
                            <option value='dark'>Dark</option>
                            <option value ='fairy'>Fairy</option>
                            <option value ='unknown'>Unknown</option>
                            <option value='shadow'>Shadow</option>
                        </select>
                    </label>
                    <label> Filter Created:
                        <select onChange={e => handleFilterCreated(e)}>
                            <option value="" disabled selected>Select source</option>
                            <option value ='All'>All</option>
                            <option value='created'>Created</option>
                            <option value ='api'>Existing</option>
                        </select>
                    </label>
                </div>
            </div>
    )
}

export default SortFilter;