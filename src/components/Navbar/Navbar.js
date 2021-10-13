import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggleStats, setTottleStats] = useState(false)

    const standings = () => {
        console.log('standings')
    }
    const stats = () => {
        console.log('stats')
    }
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to='/Standings'>
                    <div className="navLi">Temp</div>
                </Link>
                <Link to='/PlayerStats'>
                    <div className="navLi">Stats</div>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar


