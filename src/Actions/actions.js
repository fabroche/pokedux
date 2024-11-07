import {actionTypes} from "./types.js";

export function setPokemonsAction(payload) {
    return {
        type: actionTypes.SET_POKEMON,
        payload
    }
}