import './App.css'
import {Searcher} from "./Components/Searcher/Searcher.jsx";
import {Col} from "antd";
import {PokemonList} from "./Components/PokemonList/PokemonList.jsx";
import pokeduxLogo from "./assets/logo.svg";
import {PokemonCard} from "./Components/PokemonCard/PokemonCard.jsx";
import {PokemonCardLoading} from "./Components/PokemonCardLoading/PokemonCardLoading.jsx";
import {usePokemons} from "./Hooks/usePokemons.jsx";


function App() {

    const {pokemons, loading} = usePokemons()

    return (
        <div className="App">
            <header>
                <Col span={4} offset={10}>
                    <img src={pokeduxLogo} alt="Pokedux Logo"/>
                </Col>
                <Col span={8} offset={8}>
                    <Searcher loading={loading}/>
                </Col>
            </header>
            <PokemonList
                pokemonsList={pokemons}
                loading={loading}
                render={(pokemon, index) => (
                    <PokemonCard
                        key={pokemon.name}
                        title={pokemon.name}
                        cover={pokemon.sprites.front_default}
                        types={pokemon.types}
                        index={index + 1}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                    />
                )}
                onLoading={(item, index) => <PokemonCardLoading key={index}/>}
            />
        </div>
    )
}

export default App;
