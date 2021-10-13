export const setInitialState = (state, payload) => {
    return { ...state, standings: payload }
}

export const setActiveComponent = (state, payload) => {
    const stateCopy = { ...state }
    stateCopy.activeComponent[`${Object.keys(payload)[0]}`] = !state.activeComponent[`${Object.keys(payload)[0]}`]
    return stateCopy
}