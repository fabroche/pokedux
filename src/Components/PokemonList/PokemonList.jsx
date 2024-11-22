import React from 'react';
import './PokemonList.css'
import {PokemonCard} from "../PokemonCard/PokemonCard.jsx";

function PokemonList({
                         pokemonsList = Array(10).fill(''),
                         loading,
                         render,
                         onLoading
                     }) {


    return (
        <div className='PokemonList'>
            {loading && Array(10).fill('').map(onLoading)}
            {!loading && pokemonsList.map(render)}
        </div>
    );
}

export {PokemonList};