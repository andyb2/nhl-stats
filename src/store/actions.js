import { setInitialState } from "./reducerFunctions";

const SET_NHL_DATA_INITIAL_STATE = 'SET_NHL_DATA_INITIAL_STATE';

export const setNhlDataInitialState = (nhlData) => {
    return {
        type: SET_NHL_DATA_INITIAL_STATE,
        payload: nhlData
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_NHL_DATA_INITIAL_STATE:
            return setInitialState(state, action.payload);
        default:
            return state;
    }
}

export default reducer