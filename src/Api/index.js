import axios from 'axios';

async function getPokemons() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    return response.data.results;
}

export {getPokemons};