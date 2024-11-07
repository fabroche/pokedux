import './App.css'
import {Searcher} from "./Components/Searcher.jsx";
import {Col} from "antd";
import {PokemonList} from "./Components/PokemonList/PokemonList.jsx";
import pokeduxLogo from "./assets/logo.svg";
import {useEffect, useState} from "react";
import {getPokemons} from "./Api/index.js";
import {PokemonCard} from "./Components/PokemonCard/PokemonCard.jsx";
import {connect} from 'react-redux'
import {setPokemonsAction} from "./Actions/actions.js";


function App({pokemonsList, setPokemonsList}) {


    useEffect(() => {

        async function fetchPokemonsData() {
            const pokemonsResults = await getPokemons();
            setPokemonsList(pokemonsResults);
        }

        fetchPokemonsData();
    }, []);

    return (
        <div className="App">
            <header>
                <Col span={4} offset={10}>
                    <img src={pokeduxLogo} alt="Pokedux Logo"/>
                </Col>
                <Col span={8} offset={8}>
                    <Searcher/>
                </Col>
            </header>

            <PokemonList
                pokemonsList={pokemonsList}
                render={pokemon => (
                    <PokemonCard
                        key={pokemon.name}
                        title={pokemon.name}
                    />
                )}
            />
        </div>
    )
}

const mapStateToProps =(state) => ({
    pokemonsList: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
    setPokemonsList: payload => dispatch(setPokemonsAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
