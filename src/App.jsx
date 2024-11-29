import './App.css'
import {Searcher} from "./Components/Searcher/Searcher.jsx";
import {Col, Row} from "antd";
import {PokemonList} from "./Components/PokemonList/PokemonList.jsx";
import pokeduxLogo from "./assets/logo.svg";
import {PokemonCard} from "./Components/PokemonCard/PokemonCard.jsx";
import {PokemonCardLoading} from "./Components/PokemonCardLoading/PokemonCardLoading.jsx";
import {usePokemons} from "./Hooks/usePokemons.jsx";
import {useSelector} from "react-redux";


function App() {

    const searchValue = useSelector(state => state.data.searchValue)
    const {pokemons, loading} = usePokemons()
    const filteredPokemons = pokemons.filter(
        pokemon => {
            const pokemonName = pokemon.name.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return pokemonName.includes(searchText)
        }
    )

    return (
        <div className="App">
            <header>
                <Row
                    gutter={[16, 16]}
                    justify="center"
                    align="middle"
                >
                    <Col
                        xs={{span: 16, offset: 0}}
                        md={{span: 8, offset: 0}}>
                        <img
                            src={pokeduxLogo}
                            alt="Pokedux Logo"
                            style={{
                                width: '100%',
                            }}/>
                    </Col>
                    <Col
                        xs={{span: 18, offset: 0}}
                        md={{span: 18, offset: 0}}>
                        <Searcher loading={loading}/>
                    </Col>
                </Row>
            </header>
            <PokemonList
                pokemonsList={filteredPokemons}
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
