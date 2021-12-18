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
    return (state.stationListWidth) + 'px';
  },
  setStationMapBottomMargin: (state) => {
    return (state.mainHeaderHeight + state.subHeaderHeight) + 'px';
  }
}

export default {
  namespaced: true,
  state,
  getters
}