import React from 'react';
import './PokemonCardLoading.css'

import {Card} from "antd";
import Meta from "antd/es/card/Meta.js";

function PokemonCardLoading(props) {

    const styles = {
        header: {
            background: 'var(--secondary)',
            color: 'var(--secondary)'
        },
        cover: {
            aspectRatio: '4/3'
        }
    };

    return <div className="PokemonCard--loading loading">

    </div>
}

export {PokemonCardLoading};