import axios from "axios";
import { setNhlDataInitialState } from "./actions";

export const nhlDataFetch = () => async (dispatch) => {
    try {
        const nhlData = await axios.get('https://statsapi.web.nhl.com/api/v1/standings');
        dispatch(setNhlDataInitialState(nhlData))
    } catch (error) {
        console.error(error)
    }
}
// const test = await axios.get('https://statsapi.web.nhl.com/api/v1/teams/2/roster');
export const teamAndPlayerData = () => async (dispatch) => {
    try {
        const storedPlayerData = [];
        const teamList = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/`);

        const playerIdFetch = teamList.data.teams.map(async (team) => {
            const tempData = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster`);
            storedPlayerData.push(tempData)
        });

        console.log(`[STORED DATA]`, storedPlayerData)
    } catch (error) {
        console.error(error)
    }
}