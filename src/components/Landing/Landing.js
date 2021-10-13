import { connect } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import WStandings from "../../Widgets/WStandings/WStandings";
import "./Landing.css"
import { nhlDataFetch } from "../../store/thunkCreators";

const Landing = (props) => {

    const retrieveNhlData = async () => {
        await props.nhlDataFetch()
    }

    useEffect(() => {
        retrieveNhlData()
    }, [])
    return (
        <>
            <div className="container">
                <Navbar />
                <Sidebar />
                <div className="viewPort">
                    {props.state.standings ? <WStandings standings={props.state.standings} /> : null}
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        nhlDataFetch: () => {
            dispatch(nhlDataFetch())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)