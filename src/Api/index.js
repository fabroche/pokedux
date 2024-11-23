import axios from 'axios';

async function getPokemons() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
    return response.data.results;
}

async function getPokemonDetails(pokemon){
    const response = await axios.get(pokemon.url);
    return response.data;
}

export {getPokemons, getPokemonDetails};