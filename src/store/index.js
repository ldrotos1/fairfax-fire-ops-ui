import { createStore } from 'vuex'
import find from 'lodash/find'

export default createStore({
  state: {
    pages: [
      {
        name: 'Stations',
        label: 'Station Information',
        url: '/stations',
        icon: 'festival'
      }
    ]
  },
  getters: {
    getPages: (state) => {
      return state.pages;
    },
    getPageFromName: (state) => (name) => {
      return find(state.pages, ['name', name]);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
