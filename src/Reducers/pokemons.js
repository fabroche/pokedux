import {actionTypes} from "../Actions/types.js";

const initialState = {
    pokemons: [],
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            };
        default:
            return state;
    }
}