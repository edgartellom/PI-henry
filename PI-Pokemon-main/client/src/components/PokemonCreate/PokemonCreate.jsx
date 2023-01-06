import React, { useState, useEffect }from "react";
import { Link, useHistory} from 'react-router-dom';
import { postPokemon, getTypes } from '../../actions';
import { useDispatch, useSelector } from "react-redux";
import { createBg, typesInput, typeCheck } from './PokemonCreate.module.css';

function validate(input) {
    let errors = {};
    let stats = ["hp", "attack", "defense", "speed", "height", "weight"]
    if (!input.name){
        errors.name = "Name is required"
    }
    stats.forEach(stat => {
        if (isNaN(Number(input[stat]))){
            errors[stat] = `${stat} must be a number`
        } 
    })
        
    return errors;
}

function PokemonCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "", 
        hp: "", 
        attack: "", 
        defense: "", 
        speed: "", 
        height: "", 
        weight: "", 
        type: [] 
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
        
        console.log(input)
    }

    const handleCheck = (e) => {
        if (e.target.checked){
            setInput({
                ...input,
                type: [...input.type, e.target.value]
            })
        }
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        dispatch(postPokemon(input))
        alert("Pokemon created succesfully!!!")
        setInput({
            name: "", 
            hp: "", 
            attack: "", 
            defense: "",
            speed: "", 
            height: "", 
            weight: "", 
            type: [] 
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    return (
        <div className={createBg}>
            <Link to='/home'><button>Return</button></Link>
            <h1>Create your pokemon!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={e => handleChange(e)}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>HP: </label>
                    <input
                        type='text'
                        value={input.hp}
                        name='hp'
                        onChange={e => handleChange(e)}
                    />
                    {errors.hp && (
                        <p>{errors.hp}</p>
                    )}
                </div>
                <div>
                    <label>Attack: </label>
                    <input
                        type='text'
                        value={input.attack}
                        name='attack'
                        onChange={e => handleChange(e)}
                    />
                    {errors.attack && (
                        <p>{errors.attack}</p>
                    )}
                </div>
                <div>
                    <label>Defense: </label>
                    <input
                        type='text'
                        value={input.defense}
                        name='defense'
                        onChange={e => handleChange(e)}
                    />
                    {errors.defense && (
                        <p>{errors.defense}</p>
                    )}
                </div>
                <div>
                    <label>Speed: </label>
                    <input
                        type='text'
                        value={input.speed}
                        name='speed'
                        onChange={e => handleChange(e)}
                    />
                    {errors.speed && (
                        <p>{errors.speed}</p>
                    )}
                </div>
                <div>
                    <label>Height: </label>
                    <input
                        type='text'
                        value={input.height}
                        name='height'
                        onChange={e => handleChange(e)}
                    />
                    {errors.height && (
                        <p>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label>Weight: </label>
                    <input
                        type='text'
                        value={input.weight}
                        name='weight'
                        onChange={e => handleChange(e)}
                    />
                    {errors.weight && (
                        <p>{errors.weight}</p>
                    )}
                </div>
                <div className={typesInput}>
                    <label>Type: </label> 
                        {types.map((t) => (
                            <label className={typeCheck}>
                                <input
                                type="checkbox"
                                name={t.name}
                                value={t.name}
                                onChange={e => handleCheck(e)}
                                />
                                {t.name} 
                            </label>
                        ))}
                        
                </div>

                <div>
                    <input 
                        type="submit"
                        name="submit"
                        value="Create Pokemon"
                        disabled={Object.keys(errors).length !== 0 || !input.name}
                    />
                </div>
                
            </form>
        </div>
    )
}

export default PokemonCreate;