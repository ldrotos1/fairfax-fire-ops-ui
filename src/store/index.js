import { createStore } from 'vuex';
import layout from './modules/layout';
import pages from './modules/pages';
import stations from './modules/stations';

export default createStore({
  modules: {
    layout,
    pages,
    stations
  }
})
