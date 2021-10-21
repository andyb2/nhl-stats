import {
    setInitialState,
    setActiveComponent,
    setTeamData,
    teamRoster,
} from "./reducerFunctions";

const SET_NHL_DATA_INITIAL_STATE = 'SET_NHL_DATA_INITIAL_STATE';
const COMPONENT_TOGGLE = 'COMPONENT_TOGGLE';
const SET_TEAM_DATA = 'SET_TEAM_DATA';
const SET_TEAM_ROSTER = 'SET_TEAM_ROSTER'

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

export const teamInfo = (teamSort) => {
    return {
        type: SET_TEAM_DATA,
        payload: teamSort
    }
}

export const selectedNhlTeam = (teamRoster, nhlTeam) => {
    return {
        type: SET_TEAM_ROSTER,
        payload: { teamRoster, nhlTeam }
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_NHL_DATA_INITIAL_STATE:
            return setInitialState(state, action.payload);
        case COMPONENT_TOGGLE:
            return setActiveComponent(state, action.payload);
        case SET_TEAM_DATA:
            return setTeamData(state, action.payload);
        case SET_TEAM_ROSTER:
            return teamRoster(state, action.payload)
        default:
            return state;
    }
}

export default reducer