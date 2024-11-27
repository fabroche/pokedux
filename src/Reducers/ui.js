import {actionTypes} from "../Actions/types.js";
import {fromJS} from "immutable";

const initialState = fromJS({
    loading: false,
})

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SET_LOADING:
            // return {
            //     ...state,
            //     loading: action.payload
            // }
            return state.setIn(
                ['loading'],
                fromJS(action.payload)
            )

        default:
            return state;
    }
}