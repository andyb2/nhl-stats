import axios from 'axios'
import './Sidebar.css'
import { useEffect, useState } from 'react'
import Team from '../Team/Team'
import { toggleComponents } from '../../store/actions'
import { connect } from 'react-redux'

const Sidebar = (props) => {

    // const { teams } = props.state;
    const { activeComponent } = props.state;
    const { Teams } = activeComponent


    const handleTeamClick = async (teamName) => {
        console.log(teamName)
        await props.toggleComponents({ Teams: !Teams });

    }

    return (
        <div className="sidebar">
            {props.state.teams &&
                props.state.teams.map((nhlTeam, idx) => {
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


const mapDispatchToProps = (dispatch) => {
    return {
        toggleComponents: (teams) => {
            dispatch(toggleComponents(teams))
        }
    }
}
export default connect(null, mapDispatchToProps)(Sidebar)