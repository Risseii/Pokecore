import React,{useEffect, useState} from 'react';
import axios from 'axios';

const ComponentePokemon = () => {

    const [pokemons,setPokemons] = useState([]);
    const [search,setSearch] = useState(false);

    const display = () => {
        setSearch(true);
    }

    
    useEffect(() => { 
        if(search == true){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response => {
                setPokemons(response.data.results); //se utiliza results
            })
        }
    },[search]); 

    return(
        <div>
            <button onClick={display}>Fetch Pokemon</button>
            <ul>
                {pokemons.map(pokemon => (
                    <li>{pokemon.name}</li>
                ))}
            </ul>
        </div>

    )

}

export default ComponentePokemon;
