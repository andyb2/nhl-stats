export const setInitialState = (state, payload) => {
    // console.log(`STATE`, payload)
    return { ...state, standings: payload }
}