import {actionTypes} from "./types.js";
import {getPokemonDetails} from "../Api/index.js";

export function setPokemonsAction(payload) {
    return {
        type: actionTypes.SET_POKEMON,
        payload
    }
}

export const getPokemonsDetailsAction =
    (pokemonsList = []) =>
        async (dispatch) => {
            const pokemonsDetailed = await Promise.all(
                pokemonsList.map(pokemon => getPokemonDetails(pokemon))
            );
            dispatch(setPokemonsAction(pokemonsDetailed))
        }

export function setLoadingAction(payload) {
    return {
        type: actionTypes.SET_LOADING,
        payload,
    }
}

export function setFavorite(payload) {
    return {
        type: actionTypes.SET_FAVORITE,
        payload
    }
}