import {RootState} from '@/store/types';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { home } from './home';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    home,
  },
};
export default new Vuex.Store<RootState>(store);

