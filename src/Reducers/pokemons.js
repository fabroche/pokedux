import {actionTypes} from "../Actions/types.js";

const initialState = {
    pokemons: [],
    loading: false,
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            };

        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case actionTypes.SET_FAVORITE: {

            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex(pokemon =>
                pokemon.id === action.payload.pokemonId
            )

            if (currentPokemonIndex < 0) {
                return state;
            }

            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            return {...state, pokemons: newPokemonList}

        }

        default:
            return state;
    }
}