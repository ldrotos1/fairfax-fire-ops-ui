import { createStore } from 'vuex';
import pages from './modules/pages';
import stations from './modules/stations';

export default createStore({
  modules: {
    pages,
    stations
  }
})
