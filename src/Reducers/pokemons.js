import {actionTypes} from "../Actions/types.js";
import {fromJS} from "immutable";

const initialState = fromJS({
    pokemons: [],
    loading: false,
})

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEMON:
            // return {
            //     ...state,
            //     pokemons: action.payload
            // };
            return state.setIn(
                ['pokemons'],
                fromJS(action.payload)
            )
        case actionTypes.SET_LOADING:
            // return {
            //     ...state,
            //     loading: action.payload
            // }
            return state.setIn(
                ['loading'],
                fromJS(action.payload)
            )

        case actionTypes.SET_FAVORITE: {

            // const newPokemonList = [...state.pokemons];
            // const currentPokemonIndex = newPokemonList.findIndex(pokemon =>
            //     pokemon.id === action.payload.pokemonId
            // )

            // if (currentPokemonIndex < 0) {
            //     return state;
            // }

            // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;

            // return {
            //     ...state,
            //     pokemons: newPokemonList
            // }

            const currentPokemon = state
                .get('pokemons').find(
                    pokemon => pokemon.get('id') === action.payload.pokemonId
                )

            if (!currentPokemon) {
                return state;
            }

            const isFavorite = currentPokemon.get('favorite')

            const newPokemonList = state.get('pokemons').map(
                pokemon => {
                    if (pokemon.get('id') === action.payload.pokemonId) {
                        return pokemon.set('favorite', !isFavorite)
                    }
                    return pokemon;
                }
            )

            return state.set('pokemons', newPokemonList)

        }

        default:
            return state;
    }
}