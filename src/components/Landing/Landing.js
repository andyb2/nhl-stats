import { connect } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import WStandings from "../../Widgets/WStandings/WStandings";
import Standings from "../Standings/Standings";
import "./Landing.css"
import { nhlDataFetch, teamFetch } from "../../store/thunkCreators";

const Landing = (props) => {

    const retrieveNhlData = async () => {
        await props.nhlDataFetch();
        // await props.teamAndPlayerData();
        await props.teamFetch();
    }
    console.log(`prop`, props.state)
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
        // teamAndPlayerData: () => {
        //     dispatch(teamAndPlayerData());
        // }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)