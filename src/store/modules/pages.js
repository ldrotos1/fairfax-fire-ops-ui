import find from 'lodash/find'

const state = () => ({
  pages: [
    {
      name: 'Stations',
      label: 'Station Information',
      url: '/stations',
      icon: 'festival'
    }
  ]
})

const getters = {
  getPages: (state) => {
    return state.pages;
  },
  getPageFromName: (state) => (name) => {
    return find(state.pages, ['name', name]);
  }
}

export default {
  namespaced: true,
  state,
  getters
}