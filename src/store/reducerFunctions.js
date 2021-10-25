export const setInitialState = (state, payload) => {
    const stateCopy = { ...state }
    return { ...stateCopy, standings: payload }
}

export const setActiveComponent = (state, payload) => {
    const stateCopy = { ...state }
    for (const property in state.activeComponent) {
        property === Object.keys(payload).toString()
            ? stateCopy.activeComponent[`${Object.keys(payload)}`] = Object.values(payload)[0]
            : stateCopy.activeComponent[`${property}`] = false
    }
    return stateCopy
}

export const setTeamData = (state, payload) => {
    const stateCopy = { ...state }
    return { ...stateCopy, teams: payload }
}

export const teamRoster = (state, payload) => {
    const { teamRoster } = payload
    const { nhlTeam } = payload
    const stateCopy = { ...state }
    return { ...stateCopy, selectedTeam: { nhlTeam, teamRoster } }
}

export const playerSearchedStats = (state, payload) => {
    const stateCopy = {...state}
    return { ...stateCopy, PlayerStats: payload }
}

export const setSchedule = (state, payload) => {
    const {data} = payload
    const stateCopy = {...state}
    return {...stateCopy, schedule: data}
}