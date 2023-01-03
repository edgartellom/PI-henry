import React from "react";
import {pageNumber} from './Paginated.module.css'

function Paginado ({pokemonsPerPage, allPokemons, paginated}) {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                { 
                    pageNumbers?.map(number => (
                        <li className={pageNumber} key={number}>
                            <a onClick={() => paginated(number)}>{number}</a>
                        </li>
                    
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado