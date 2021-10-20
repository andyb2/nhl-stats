import axios from "axios";
import { setNhlDataInitialState, teamInfo } from "./actions";

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


// export const teamAndPlayerData = () => async (dispatch) => {
//     try {
//         const playersId = [];
//         const storedPlayerData = [];
//         const teamList = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/`);

//         const player = teamList.data.teams.map(async (team) => {
//             const tempData = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster/`);
//             // const test = tempData.data.roster.map(data => {
//             //     storedPlayerData.push(data.person.id)
//             // })
//             storedPlayerData.push(...tempData.data.roster);
//         });
//         console.log(storedPlayerData)
//     } catch (error) {
//         console.error(error)
//     }
// }

// ?teamId=4,5,29