import { connect } from "react-redux";
import { playerSearchedStats } from "../../store/reducerFunctions";
import { playerStats } from "../../store/thunkCreators";

const Team = (props) => {

    const { selectedTeam } = props;
    const { nhlTeam } = selectedTeam
    const { teamRoster } = selectedTeam
    console.log(`TEAM PROP`, selectedTeam)

    const playerSelect = async (playerId) => {
        console.log(playerId)
        await props.playerStats(playerId)
    }

    return (
        <div>
            <h1>{nhlTeam.name}</h1>
            <h2>Name: {nhlTeam.franchise.teamName}</h2>
            <h2>Abbreviation: {nhlTeam.abbreviation}</h2>
            <div>Conference: {nhlTeam.conference.name}</div>
            <div>Division: {nhlTeam.division.name}</div>
            <div>Official Website: <a href={nhlTeam.officialSiteUrl} target='_blank'>{nhlTeam.officialSiteUrl}</a></div>
            <div>Arena: {nhlTeam.venue.name}</div>
            <h1>Roster</h1>
            <table>
                <thead>
                    <tr>
                        <th>POS</th>
                        <th>Jersey #</th>
                        <th>Player Name</th>
                        <th>GP</th>
                        <th>Goals</th>
                    </tr>
                </thead>

                {teamRoster.map(players => {
                    if (players.name.position.code !== 'G') {
                        return (
                            <tbody key={players.name.person.fullName}>
                                <tr>
                                    <td>{players.name.position.code}</td>
                                    <td>{players.name.jerseyNumber}</td>
                                    <td onClick={() => playerSelect(players.name.person.id)}>{players.name.person.fullName}</td>
                                    <td>{players.stats[0].splits.length !== 0 ? players.stats[0].splits[0].stat.games : 0}</td>
                                    <td>{players.stats[0].splits.length !== 0 ? players.stats[0].splits[0].stat.goals : 0}</td>
                                </tr>
                            </tbody>
                        )
                    }
                })}
            </table>
            <table>
                <thead>
                    <tr>
                        <th>POS</th>
                        <th>Jersey #</th>
                        <th>Player Name</th>
                        <th>GP</th>
                        <th>GAA</th>
                        <th>SV %</th>
                    </tr>
                </thead>
                {teamRoster.map(goalies => {
                    if (goalies.name.position.code === 'G') {
                        return (
                            <tbody key={goalies.name.person.fullName}>
                                <tr>
                                    <td>{goalies.name.position.code}</td>
                                    <td>{goalies.name.jerseyNumber}</td>
                                    <td onClick={() => playerSelect(goalies.name.person.id)}>{goalies.name.person.fullName}</td>
                                    <td>{goalies.stats[0].splits[0].stat.games}</td>
                                    <td>{goalies.stats[0].splits[0].stat.goalAgainstAverage}</td>
                                    <td>{goalies.stats[0].splits[0].stat.savePercentage}</td>
                                    <td>{console.log(goalies)}</td>
                                </tr>
                            </tbody>
                        )
                    }
                })}
            </table>

        </div>
    )
}
// Object.keys(players.stats[0].splits).length - 1
const mapDispatchToProps = (dispatch) => {
    return {
        playerStats: (playerId) => {
            dispatch(playerStats(playerId))
        }
    }
}

export default connect(null, mapDispatchToProps)(Team)