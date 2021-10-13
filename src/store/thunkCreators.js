import axios from "axios";
import { setNhlDataInitialState } from "./actions";

export const nhlDataFetch = () => async (dispatch) => {
    try {
        const nhlData = await axios.get('https://statsapi.web.nhl.com/api/v1/standings')
        dispatch(setNhlDataInitialState(nhlData))
    } catch (error) {
        console.error(error)
    }
}