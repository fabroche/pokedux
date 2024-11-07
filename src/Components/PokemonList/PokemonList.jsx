import React from 'react';
import './PokemonList.css'
import {PokemonCard} from "../PokemonCard/PokemonCard.jsx";

function PokemonList({pokemons}) {
    return (
        <div className='PokemonList'>
            {pokemons.map(
                    (pokemon) => {
                        return <PokemonCard/>
                    }
                )}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export {PokemonList};