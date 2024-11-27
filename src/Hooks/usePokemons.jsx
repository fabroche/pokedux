import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchPokemonsWithDetails} from "../slices/dataSlice.js";

function usePokemons() {

    const pokemons = useSelector(
        state => state.data.pokemons, shallowEqual
    )
    const loading = useSelector(state => state.ui.loading)
    const dispatch = useDispatch()

    useEffect(() => {

        // async function fetchPokemonsData() {
            // Sin Redux Toolkit
            // dispatch(setLoadingAction(true))
            // const pokemonsResults = await getPokemons();
            //
            // dispatch(getPokemonsDetailsAction(pokemonsResults));
            // dispatch(setLoadingAction(false))
        // }

        // fetchPokemonsData();

        // Con Redux Toolkit
        dispatch(fetchPokemonsWithDetails())

    }, [dispatch]);

    return {pokemons, loading};
}

export {usePokemons};