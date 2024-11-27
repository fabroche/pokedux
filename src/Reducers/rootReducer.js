import {combineReducers} from "redux";
import dataReducer from "../slices/dataSlice.js";
import uiReducer from "../slices/uiSlice.js";

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
})

export {rootReducer};