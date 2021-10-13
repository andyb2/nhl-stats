import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import Standings from "../Standings/Standings";
import WStandings from "../../Widgets/WStandings/WStandings";
import "./Landing.css"
import { useEffect } from "react";

const Landing = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <Sidebar />
                <div className="viewPort">
                    {/* <Standings /> */}
                    <WStandings />
                    <WStandings />
                    <WStandings />
                    <WStandings />
                    {/* <WStandings />
                    <WStandings /> */}

                </div>
            </div>
        </>
    )
}

export default Landing