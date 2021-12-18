import { createStore } from 'vuex';
import layout from './modules/layout';
import pages from './modules/pages';
import stations from './modules/stations';
import map from './modules/map';

export default createStore({
  modules: {
    layout,
    pages,
    stations,
    map
  }
})
