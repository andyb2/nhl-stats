import { connect } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import WStandings from "../../Widgets/WStandings/WStandings";
import Standings from "../Standings/Standings";
import "./Landing.css"
import { nhlDataFetch, teamAndPlayerData } from "../../store/thunkCreators";

const Landing = (props) => {

    const retrieveNhlData = async () => {
        await props.nhlDataFetch();
        await props.teamAndPlayerData();
    }
    console.log(props.state)
    useEffect(() => {
        retrieveNhlData()
    }, [])
    return (
        <>
            <div className="container">
                <Navbar />
                <Sidebar />
                <div className="viewPort">
                    {props.state.standings && props.state.activeComponent.WStandings ? <WStandings standings={props.state.standings} /> : null}
                    {props.state.activeComponent.Standings ? <Standings standings={props.state.standings} /> : null}
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
        teamAndPlayerData: () => {
            dispatch(teamAndPlayerData());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)