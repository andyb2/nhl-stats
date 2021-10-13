import axios from 'axios'
import { useEffect, useState } from 'react';
import './Standings.css'
import Sample from '../../tempJSON/data'
const Standings = () => {
    const [standings, setStandings] = useState(Sample)
    const [test, setTest] = useState()

    // const standingRequest = async () => {
    //     const standingsApiRequest = await axios.get('https://statsapi.web.nhl.com/api/v1/standings');
    //     // setStandings(standingsApiRequest)
    //     setTest(standingsApiRequest)
    // }
    // console.log(test)
    // useEffect(() => {
    //     standingRequest()
    // }, [])
    // console.log(Sample)
    return (
        <div className="standingsComp">
            <h1>{standings.data.records[0].division.name}</h1>
            <table className="standingsTable">
                <thead className="tableHeader">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>GP</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                    </tr>
                </thead>
                {standings &&
                    standings.data.records[0].teamRecords.map((stats, idx) => {
                        return (
                            <tbody className="teamCard" key={idx}>
                                <tr className="standingsTableRow" key={idx}>
                                    <td>{idx + 1}</td>
                                    <td className="teamNameStyle">{stats.team.name}</td>
                                    <td>{stats.gamesPlayed}</td>
                                    <td>{stats.leagueRecord.wins}</td>
                                    <td>{stats.leagueRecord.losses}</td>
                                    <td>{stats.points}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <h1>{standings.data.records[1].division.name}</h1>
            <table className="standingsTable">
                <thead className="tableHeader">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>GP</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                    </tr>
                </thead>
                {standings &&
                    standings.data.records[1].teamRecords.map((stats, idx) => {
                        return (
                            <tbody className="teamCard" key={idx}>
                                <tr className="standingsTableRow" key={idx}>
                                    <td>{idx + 1}</td>
                                    <td className="teamNameStyle">{stats.team.name}</td>
                                    <td>{stats.gamesPlayed}</td>
                                    <td>{stats.leagueRecord.wins}</td>
                                    <td>{stats.leagueRecord.losses}</td>
                                    <td>{stats.points}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Standings