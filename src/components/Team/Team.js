import { connect } from "react-redux";


const Team = (props) => {

    const { selectedTeam } = props;
    const { nhlTeam } = selectedTeam
    const { roster } = selectedTeam
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
                    </tr>
                </thead>

                {roster.map(players => {
                    return (
                        <tbody>
                            <tr>
                                <td>{players.position.code}</td>
                                <td>{players.jerseyNumber}</td>
                                <td onClick={() => playerSelect(players.person.id)}>{players.person.fullName}</td>
                            </tr>
                        </tbody>
                    )
                })
                }
            </table>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        playerStats: (playerId) => {
            dispatch(playerStats(playerId))
        }
    }
}

export default connect(null, mapDispatchToProps)(Team)