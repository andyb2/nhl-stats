import { connect } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import WStandings from "../../Widgets/WStandings/WStandings";
import Standings from "../Standings/Standings";
import "./Landing.css"
import { nhlDataFetch, teamFetch } from "../../store/thunkCreators";
import Teams from "../Team/Team"

const Landing = (props) => {

    console.log(`PROPS`, props)

    const retrieveNhlData = async () => {
        await props.nhlDataFetch();
        await props.teamFetch();
    }

    useEffect(() => {
        retrieveNhlData()
    }, [])

    return (
        <>
            <div className="container">
                <Navbar />
                <Sidebar state={props.state} />
                <div className="viewPort">
                    {props.state.standings && props.state.activeComponent.WStandings ? <WStandings standings={props.state.standings} /> : null}
                    {props.state.activeComponent.Standings ? <Standings standings={props.state.standings} /> : null}
                    {props.state.selectedTeam && props.state.activeComponent.Teams ? <Teams selectedTeam={props.state.selectedTeam} /> : null}
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
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)