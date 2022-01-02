import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';

const state = () => ({
  stationsAll: [],
  stationsSubSet: [],
  stationActive: undefined,
  stationsLayer: undefined
})

const getters = {
  getStationsAll: (state) => {
    return state.stationsAll;
  },
  getStationsSubSet: (state) => {
    return state.stationsSubSet
  }
}

const mutations = {
  setStations: (state, stations) => {
    state.stationsAll = stations ? stations : [];
    state.stationsSubSet = stations ? stations : [];
  },

  setActiveStation: (state, stationNumber) => {
    state.stationActive = stationNumber;
  },

  filterStations: (state, filterOn) => {
    if (!filterOn || filterOn.length === 0) {
      state.stationsSubSet = state.stationsAll;
    } 
    else {
      filterOn = filterOn.toUpperCase();
      state.stationsSubSet = filter(state.stationsAll, (s) => { 
        return s.stationName.toUpperCase().includes(filterOn) || 
          s.stationNumber.toUpperCase().includes(filterOn) ||
          s.battalion.toUpperCase().includes(filterOn)
      });
    }
  },

  sortStations: (state, sortOn) => {
    if (sortOn) {
      state.stationsSubSet = sortBy(state.stationsSubSet, [sortOn]);
      state.stationsAll = sortBy(state.stationsAll, [sortOn]);
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}