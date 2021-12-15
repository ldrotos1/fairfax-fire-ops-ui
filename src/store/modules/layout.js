const state = () => ({
  mainHeaderHeight:50,
  subHeaderHeight:50,
  stationListWidth: 375
})

const getters = {
  getStationListWidth: (state) => {
    return state.stationListWidth;
  },
  setStationMapLeftMargin: (state) => {
    return state.stationListWidth;
  },
  setStationMapBottomMargin: (state) => {
    return state.mainHeaderHeight + state.subHeaderHeight;
  }
}

export default {
  namespaced: true,
  state,
  getters
}