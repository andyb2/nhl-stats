import { connect } from 'react-redux'
import './WStandings.css'
// import Sample from '../../tempJSON/data'
import { toggleComponents } from '../../store/actions'
import { useState } from 'react'
import Standings from '../../components/Standings/Standings'

const WStandings = (props) => {
    // NHL data drilling
    const { standings } = props
    const { data } = standings
    const { records } = data

    // Component render toggle
    const { activeComponent } = props
    const { WStandings } = activeComponent
    const { Standings } = activeComponent


    const renderFullStats = () => {
        props.toggleComponents({ Standings: !Standings })
    }

    return (
        <div className="standingsWidget" onClick={renderFullStats}>
            <h1 className="widgetHeader">Standings</h1>
            <div className="widget">
                {records.map((teamStandings, idx) => {
                    return (
                        <table className="WstandingsTable" key={idx}>
                            <thead className="WStandingsHeader">
                                <tr>
                                    <th>{teamStandings.division.name}</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            {teamStandings.teamRecords.map((teamW, idx) => {
                                return (
                                    <tbody key={idx}>
                                        <tr className="WteamCard">
                                            <td>{teamW.team.name}</td>
                                            <td>{teamW.points}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    )
                })
                }
            </div>

        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleComponents: (WStandings) => {
            dispatch(toggleComponents(WStandings))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        activeComponent: state.activeComponent
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WStandings)