const state = () => ({
  mapboxAccessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
  baseMap:'mapbox://styles/mapbox/streets-v11',
  mapCenter: [38.83, -77.13],
  mapZoomLevel: 11,
  standardRadius: 5,
  hoverRadius: 7,
  standardStyle: {
    color: '#000000',
    weight: 1,
    opacity: 1.0,
    fillColor: '#d60000',
    fillOpacity: 1.0
  },
  greyedOutStyle: {
    color: '#999999',
    weight: 2,
    opacity: 1.0,
    fillColor: '#d9d9d9',
    fillOpacity: 1.0
  }
})

const getters = {
  getMapboxAccessToken: (state) => {
    return state.mapboxAccessToken;
  },
  getBaseMap: (state) => {
    return state.baseMap;
  },
  getMapCenter: (state) => {
    return state.mapCenter;
  },
  getZoomLevel: (state) => {
    return state.mapZoomLevel;
  },
  getStationStyle: (state) => {
    return state.standardStyle;
  },
  getGreyOutStyle: (state) => {
    return state.greyedOutStyle;
  },
  getStationRadius: (state) => {
    return state.standardRadius
  },  
  getGreyOutRadius: (state) => {
    return state.hoverRadius
  }
}

export default {
  namespaced: true,
  state,
  getters
}