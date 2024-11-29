import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPokemonDetails, getPokemons} from "../Api/index.js";
import {setLoading} from "./uiSlice.js";

const initialState = {
    pokemons: [],
    searchValue: '',
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        // dispatch del loader
        dispatch(setLoading(true))
        // fetch
        const pokemonsResults = await getPokemons();

        const pokemonsDetailed = await Promise.all(
            pokemonsResults.map(pokemon => getPokemonDetails(pokemon))
        );

        dispatch(setPokemons(pokemonsDetailed))
        // dispatch del loader
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },

        setFavorite: (state, action) => {
            const currentPokemonIndex = state
                .pokemons.findIndex(
                    pokemon => pokemon.id === action.payload.pokemonId
                )

            if (currentPokemonIndex >= 0) {

                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
});

export const {setFavorite, setPokemons, setSearchValue} = dataSlice.actions;

export default dataSlice.reducer;