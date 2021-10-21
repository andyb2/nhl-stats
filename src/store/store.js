import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import actions from './actions'

const renderedComponents = {
    activeComponent:
    {
        WStandings: true,
        Standings: false,
        Teams: false
    }
}

export default createStore(actions, renderedComponents, applyMiddleware(thunkMiddleware));
