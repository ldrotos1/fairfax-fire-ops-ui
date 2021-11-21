import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: {
      stations:{
        label: 'Station Information',
        url: '/stations',
        icon: 'festival'
      }
    }
  },
  getters: {
    getPages: (state) => state.pages
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
