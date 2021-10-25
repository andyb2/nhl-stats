import "../WStandings/WStandings.css"
const WSchedule = (props) => {
    const {schedule} = props;
    const {dates} = schedule;
    return (
        <div className="standingsWidget">
            <h1 className="widgetHeader">Schedule</h1>
            <div className="widget">
                {dates[0].games.map((game, idx) => {
                    return (
                        <div className="card">
                            <div className="teams">
                                <div>{game.teams.away.team.name}</div>
                                <div>{game.teams.home.team.name}</div>
                            </div>
                            <div className="time">
                                {/* {console.log(game.gameDate)} */}
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}
export default WSchedule