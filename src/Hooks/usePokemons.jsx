import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokemonsDetailsAction, setLoadingAction} from "../Actions/actions.js";
import {getPokemons} from "../Api/index.js";

function usePokemons() {

    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchPokemonsData() {
            dispatch(setLoadingAction(true))
            const pokemonsResults = await getPokemons();

            dispatch(getPokemonsDetailsAction(pokemonsResults));
            dispatch(setLoadingAction(false))
        }

        fetchPokemonsData();

    }, [dispatch]);

    return {pokemons, loading};
}

export {usePokemons};