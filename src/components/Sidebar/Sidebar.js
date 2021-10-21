import './Sidebar.css'
import { toggleComponents } from '../../store/actions'
import { connect } from 'react-redux'
import { selectedTeam } from '../../store/thunkCreators'

const Sidebar = (props) => {
    const { activeComponent } = props.state;

    const handleTeamClick = async (nhlTeam) => {
        await props.toggleComponents({ Teams: activeComponent[`Teams`] = !activeComponent['Teams'] });
        await props.selectedTeam(nhlTeam)
    }

    return (
        <div className="sidebar">
            {props.state.teams &&
                props.state.teams.map((nhlTeam, idx) => {
                    return (
                        <div
                            className="teamName"
                            key={idx}
                            onClick={() => handleTeamClick(nhlTeam)}
                        >
                            {nhlTeam.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleComponents: (teams) => {
            dispatch(toggleComponents(teams))
        },
        selectedTeam: (nhlTeam) => {
            dispatch(selectedTeam(nhlTeam))
        }
    }
}
export default connect(null, mapDispatchToProps)(Sidebar)