import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { filterByType, filterCreated, sortByProp, sortingOrder } from "../../actions"

function SortFilter({setCurrentPage, setPropOrder, setOrder}){
    const dispatch = useDispatch();
    const propOrder = useSelector((state) => state.prop)
    
    function handleFilterByType(e){
        dispatch(filterByType(e.target.value));
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value));
    }

    function handleSortByProp(e){
        e.preventDefault();
        dispatch(sortByProp(e.target.value));
        setCurrentPage(1);
        setPropOrder(`Sorted by ${e.target.value}`)
    } 

    function handleSortOrder(e){
        e.preventDefault();
        dispatch(sortingOrder(e.target.value));
        setCurrentPage(1);
        setOrder(`Sorted ${e.target.value}`)
    }
    
    return (
            <div>
                <div>
                    <label>Sort: </label>
                        <select onChange={e => handleSortByProp(e)}>
                            <option value="" disabled selected>Select a prop</option>
                            <option value='name'>Name</option>
                            <option value='attack'>Attack</option>
                        </select>
                    
                    {
                        propOrder&&
                            <select onChange={e => handleSortOrder(e)}>
                                <option value="" disabled selected>Select order</option>
                                <option value='asc'>Ascendant</option>
                                <option value='desc'>Descendant</option>
                            </select>
                            
                        
                    }
                </div>
                <div>
                    <label>Filter by Type: </label>
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
                    
                    <label>Filter Created: </label>
                        <select onChange={e => handleFilterCreated(e)}>
                            <option value="" disabled selected>Select source</option>
                            <option value ='All'>All</option>
                            <option value='created'>Created</option>
                            <option value ='api'>Existing</option>
                        </select>
                    
                </div>
            </div>
    )
}

export default SortFilter;