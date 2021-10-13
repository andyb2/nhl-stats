import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import actions from './actions'

const initialState = {}

export default createStore(actions, initialState, applyMiddleware(thunkMiddleware));
