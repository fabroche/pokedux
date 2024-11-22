import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {pokemonsReducer} from "./Reducers/pokemons.js";
import {featuring, logger} from "./Middlewares/index.js";
import {thunk} from "redux-thunk";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
    applyMiddleware(
        thunk,
        logger
        // featuring
    ),
);

const store = createStore(
    pokemonsReducer,/* preloadedState, */
    composedEnhancers
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
