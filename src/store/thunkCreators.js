import axios from "axios";
import { setNhlDataInitialState, teamInfo, selectedNhlTeam } from "./actions";

export const nhlDataFetch = () => async (dispatch) => {
    try {
        const nhlData = await axios.get('https://statsapi.web.nhl.com/api/v1/standings');
        dispatch(setNhlDataInitialState(nhlData))
    } catch (error) {
        console.error(error)
    }
}

export const teamFetch = () => async (dispatch) => {
    try {
        const teamData = await axios.get('https://statsapi.web.nhl.com/api/v1/teams/');

        const teamSort = teamData.data.teams.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
        dispatch(teamInfo(teamSort))
    } catch (error) {
        console.error(error)
    }
}

export const selectedTeam = (nhlTeam) => async (dispatch) => {
    try {
        const { link } = nhlTeam
        const nhlTeamRoster = await axios.get(`https://statsapi.web.nhl.com/${link}/roster`);
        const test = await axios.get('https://statsapi.web.nhl.com/api/v1/people/8479368/stats/?stats=yearByYear')
        console.log(`stat`, test)
        // const playerStats = nhlTeamRoster.data.roster.map(async(playerId) => {
        //     const playerStat = await 
        // })

        dispatch(selectedNhlTeam(nhlTeamRoster, nhlTeam))
    } catch (error) {
        console.error(error)
    }
}
