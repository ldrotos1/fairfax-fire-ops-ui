const state = () => ({
  mapboxAccessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
  baseMapUrl:50
})

const getters = {
  getMapboxAccessToken: (state) => {
    return state.mapboxAccessToken;
  },
  getBaseMapUrl: (state) => {
    return state.baseMapUrl;
  },
}

export default {
  namespaced: true,
  state,
  getters
}