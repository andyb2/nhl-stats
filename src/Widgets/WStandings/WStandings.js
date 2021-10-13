import { Link, Route } from "react-router-dom"
import Standings from "../../components/Standings/Standings"
import './WStandings.css'
import Sample from '../../tempJSON/data'

const WStandings = () => {

    // const renderStandingsComponent = () => {
    //     return (<Link to='/Standings' component={Standings} />)

    // }
    console.log(Sample)
    return (
        <div className="standingsWidget">
            <h1 className="widgetHeader">Standings</h1>
            <div className="widget">
                <table className="WstandingsTable">
                    <thead className="WStandingsHeader">
                        <tr>
                            <th>West</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    {Sample.data.records[0].teamRecords.map(teamW => {
                        return (
                            <tbody>
                                <tr className="WteamCard">
                                    <td>{teamW.team.name}</td>
                                    <td>92</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

        </div>
    )
}
export default WStandings