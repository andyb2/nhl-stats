import {
    setInitialState,
    setActiveComponent,
} from "./reducerFunctions";

const SET_NHL_DATA_INITIAL_STATE = 'SET_NHL_DATA_INITIAL_STATE';
const COMPONENT_TOGGLE = 'COMPONENT_TOGGLE'

export const toggleComponents = (activeComponent) => {
    return {
        type: COMPONENT_TOGGLE,
        payload: activeComponent,
    }
}

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
        case COMPONENT_TOGGLE:
            return setActiveComponent(state, action.payload);
        default:
            return state;
    }
}

export default reducer