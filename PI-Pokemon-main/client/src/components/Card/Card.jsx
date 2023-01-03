import React from "react";
import { pokeCard, pokeInfo, pokeType, pokeImage } from "./Card.module.css"

function Card ({ name, image, types}){
    return (
        <div className={pokeCard}>
            <div className={pokeInfo}>
                <h3>{name}</h3>
                <div className={pokeType}>
                    <span>Type:</span>
                        {
                            types.map( e => {
                                return(
                                    <>
                                    <span> {e.name} </span>
                                    </>
                                )})
                        }
                </div>

            </div>
            
            <img src={image} alt='img not found' width='200px' height='250px' className={pokeImage}/>
        </div>
    )
}

export default Card;