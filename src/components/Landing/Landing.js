import { connect } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import WStandings from "../../Widgets/WStandings/WStandings";
import Standings from "../Standings/Standings";
import "./Landing.css"
import { nhlDataFetch, teamFetch, scheduleRequest } from "../../store/thunkCreators";
import Teams from "../Team/Team";
import WSchedule from "../../Widgets/WSchedule/WSchedule"

const Landing = (props) => {

    console.log(`PROPS`, props)
    // console.log(new Date())
    const retrieveNhlData = async () => {
        await props.nhlDataFetch();
        await props.teamFetch();
        await props.scheduleRequest();
    }

    useEffect(() => {
        retrieveNhlData();
    }, [])

    return (
        <>
            <div className="container">
                <Navbar />
                <Sidebar state={props.state} />
                <div className="viewPort">
                    {/* widget standings */}
                    {props.state.standings && props.state.activeComponent.WStandings ? <WStandings standings={props.state.standings} /> : null}
                    {/* widget schedule */}
                    {props.state.schedule && props.state.activeComponent.WSchedule ?  <WSchedule schedule={props.state.schedule}/> : null}
                    {/* standings */}
                    {props.state.activeComponent.Standings ? <Standings standings={props.state.standings} /> : null}
                    {/* team */}
                    {props.state.selectedTeam && props.state.activeComponent.Teams ? <Teams selectedTeam={props.state.selectedTeam} /> : null}
                    {/* {<Schedule scheduleDate={}/>} */}
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        nhlDataFetch: () => {
            dispatch(nhlDataFetch());
        },
        teamFetch: () => {
            dispatch(teamFetch());
        },
        scheduleRequest: () => {
            dispatch(scheduleRequest());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)