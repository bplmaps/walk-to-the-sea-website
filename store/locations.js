export const state = () => ({
  lastLocation: null
})

export const mutations = {
  setLastLocation (state, value) {
    state.lastLocation = value
  }
}

export const getters = {
  getLastLocation (state) {
    return state.lastLocation
  }
}
