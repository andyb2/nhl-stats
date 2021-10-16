export const setInitialState = (state, payload) => {
    return { ...state, standings: payload }
}

export const setActiveComponent = (state, payload) => {
    console.log(payload)
    const stateCopy = { ...state }
    stateCopy.activeComponent[`${Object.keys(payload)[0]}`] = !state.activeComponent[`${Object.keys(payload)[0]}`]
    stateCopy.activeComponent[`${Object.keys(payload)[1]}`] = !state.activeComponent[`${Object.keys(payload)[1]}`]
    // console.log(`TEST`, stateCopy.activeComponent, `payload`, stateCopy.activeComponent[`${Object.keys(payload)[1]}`])

    return stateCopy
}