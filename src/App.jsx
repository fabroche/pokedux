import './App.css'
import {Searcher} from "./Components/Searcher.jsx";
import {Col} from "antd";
import {PokemonList} from "./Components/PokemonList/PokemonList.jsx";
import pokeduxLogo from "./assets/logo.svg";

function App() {

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

            <PokemonList/>
        </div>
    )
}

export default App
