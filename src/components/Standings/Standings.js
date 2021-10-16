import './Standings.css';

const Standings = (props) => {
    const { standings } = props
    const { data } = standings
    const { records } = data
    console.log(`PROPS`, props.standings.data)

    return (
        <div className="standingsComp">
            {records.map((teamData, idx) => {
                return (
                    // <div>
                    <table className="standingsTable" key={idx}>
                        <thead className="tableHeader">
                            <tr>
                                <th></th>
                                <th>{teamData.division.name}</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>L</th>
                                <th>OT</th>
                                <th>P</th>
                            </tr>
                        </thead>
                        {standings &&
                            teamData.teamRecords.map((stats, idx) => {
                                return (
                                    <tbody className="teamCard" key={idx}>
                                        <tr className="standingsTableRow" key={idx}>
                                            <td>{idx + 1}</td>
                                            <td className="teamNameStyle">{stats.team.name}</td>
                                            <td>{stats.gamesPlayed}</td>
                                            <td>{stats.leagueRecord.wins}</td>
                                            <td>{stats.leagueRecord.losses}</td>
                                            <td>{stats.leagueRecord.ot}</td>
                                            <td>{stats.points}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                    // </div>
                )
            })}
        </div>
    )
}
export default Standings