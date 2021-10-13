import axios from 'axios'
import './Sidebar.css'
import { useEffect, useState } from 'react'
import Team from '../Team/Team'

const Sidebar = () => {

    const [nhlTeams, setNhlteams] = useState([])
    const [toggleTeam, setToggleTeam] = useState(false)

    const apiReq = async () => {
        const nhlTeamsRequest = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams`)
        const alphaTeams = [...nhlTeamsRequest.data.teams].sort((a, b) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
        setNhlteams(alphaTeams);
    }

    const handleTeamClick = (teamName) => {
        console.log(teamName)
        setToggleTeam(prev => !prev)
        if (toggleTeam) {
            return <Team />
        }
        // setToggleTeam(prev => !prev)
    }

    useEffect(() => {
        apiReq();
    }, [])

    return (
        <div className="sidebar">
            {nhlTeams &&
                nhlTeams.map((nhlTeam, idx) => {
                    return (
                        <div
                            className="teamName"
                            key={idx}
                            onClick={() => handleTeamClick(nhlTeam)}
                        >
                            {nhlTeam.name}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Sidebar