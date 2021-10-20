export const setInitialState = (state, payload) => {
    return { ...state, standings: payload }
}

export const setActiveComponent = (state, payload) => {
    // console.log(`TEMAS`, Object.keys(payload).length)

    const stateCopy = { ...state }
    if (Object.keys(payload).length === 1) {
        stateCopy.activeComponent[`${Object.keys(payload)[0]}`] = !stateCopy.activeComponent[`${Object.keys(payload)[0]}`]
        console.log(`the payload`, state.activeComponent[`${Object.keys(payload)}`])
        return stateCopy
    } else {

        stateCopy.activeComponent[`${Object.keys(payload)[0]}`] = !stateCopy.activeComponent[`${Object.keys(payload)[0]}`]
        stateCopy.activeComponent[`${Object.keys(payload)[1]}`] = !stateCopy.activeComponent[`${Object.keys(payload)[1]}`]
        // console.log(`TEST`, stateCopy.activeComponent, `payload`, stateCopy.activeComponent[`${Object.keys(payload)[1]}`])
        return stateCopy
    }
}

export const setTeamData = (state, payload) => {
    const stateCopy = { ...state }
    return { ...stateCopy, teams: payload }
}