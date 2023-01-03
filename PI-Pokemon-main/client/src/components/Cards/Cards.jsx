import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import { cards } from './Cards.module.css'

function Cards ({pokemons}){
    return (
        <div className={cards}>
            {
                pokemons?.map( p => (
        
                    <Link to={'/home/' + p.id} style={{textDecoration: 'none'}}>
                        <Card 
                            key={p.id} 
                            name={p.name} 
                            image={p.image.default} 
                            types={p.types}  
                        />
                    </Link>
        
                ))
            }
        </div>
    )
}

export default Cards