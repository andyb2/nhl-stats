import axios from "axios";
import PlayerStats from "../components/PlayerStats/PlayerStats";
import { setNhlDataInitialState, teamInfo, selectedNhlTeam, playerInfo, scheduleInfo } from "./actions";

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
        const playerStatsArray = []
        const nhlTeamRoster = await axios.get(`https://statsapi.web.nhl.com/${link}/roster`);

        for (let i = 0; i < nhlTeamRoster.data.roster.length; i += 1) {
            const playerPoints = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${nhlTeamRoster.data.roster[i].person.id}/stats/?stats=statsSingleSeason&season=20212022`);
            playerStatsArray.push({ name: nhlTeamRoster.data.roster[i], playerId: nhlTeamRoster.data.roster[i].person.id, stats: playerPoints.data.stats });
            console.log(`ARRAY`, playerStatsArray)
        }
        dispatch(selectedNhlTeam(playerStatsArray, nhlTeam))
    } catch (error) {
        console.error(error)
    }
}

export const playerStats = (playerId) => async (dispatch) => {
    try {
        const playerSearch = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerId}`);
        dispatch(playerInfo(playerSearch))
    } catch (error) {
        console.error(error)
    }
}

export const scheduleRequest = () => async (dispatch) => {
    try {
        const nhlSchedule = await axios.get('https://statsapi.web.nhl.com/api/v1/schedule');
        console.log(`SCHED`, nhlSchedule)
        dispatch(scheduleInfo(nhlSchedule))
    } catch (error){
        console.error(error)
    }
}