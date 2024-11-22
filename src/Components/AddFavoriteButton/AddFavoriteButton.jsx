import React from 'react';
import './AddFavoriteButton.css'
import {Button} from "antd";
import pokeballIconRed from '@assets/pokeball-icon-red.png'
import pokeballIconBlue from '@assets/pokeball-icon-blue.png'

function AddFavoriteButton({isfavorite, onClick}) {

    const IconState = isfavorite
        ? PokeballIconRed
        : PokeballIconBlue

    return (
        <Button
            className='add-favorite-btn'
            icon={
                <IconState
                />
            }
            onClick={onClick}
        />
    );
}

function PokeballIconRed() {
    return (
        <img
            src={pokeballIconRed}
            alt="favorite icon"
            className='custom-star-icon custom-star-icon--favorite'
        />
    )
}

function PokeballIconBlue() {
    return (
        <img
            src={pokeballIconBlue}
            alt="favorite icon"
            className='custom-star-icon'
        />
    )
}

export {AddFavoriteButton};