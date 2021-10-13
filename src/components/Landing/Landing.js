import { connect } from "react-redux";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import WStandings from "../../Widgets/WStandings/WStandings";
import "./Landing.css"
import { nhlDataFetch } from "../../store/thunkCreators";

const Landing = (props) => {

    const retrieveNhlData = async () => {
        // const nhlStandingsData =  await axios.get('https://statsapi.web.nhl.com/api/v1/standings')
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
                    <WStandings />
                    {/* <WStandings />
                    <WStandings />
                    <WStandings /> */}
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