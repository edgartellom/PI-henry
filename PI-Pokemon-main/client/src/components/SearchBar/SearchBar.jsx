import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../actions';

function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange= (e)=>{
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokemonByName(name));
        setCurrentPage(1)
    }
    return (
        <div>
            <input
                type='text'
                placeholder='Search...'
                onChange={e => handleInputChange(e)}
            />
            <button type='submit'onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar;