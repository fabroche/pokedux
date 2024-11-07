import React from 'react';
import './PokemonList.css'
import {PokemonCard} from "../PokemonCard/PokemonCard.jsx";

function PokemonList(props) {
    return (
        <div className='PokemonList'>
            {props && props.pokemonsList.map(props.render)}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export {PokemonList};