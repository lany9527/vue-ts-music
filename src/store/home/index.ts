// vuex
import { Commit, Module } from 'vuex';
import { HomeState, User } from '@/store/home/interface';
import { RootState } from '../types';
import { fetchUsers } from '@/api';

const state: HomeState = {
  count: 0,
  users: [
    {
      id: '2e32',
      icon: '',
      name: 'MTSC2019 深圳站大会',
      address: '中国·深圳科兴科学园国际会议中心',
      birthday: '2019 年 12 月 14 日',
    },
  ],
};

const getters = {
  count: (state: HomeState) => state.count,
  users: (state: HomeState) => state.users,
};

const mutations = {
  increment(state: HomeState, num: number) {
    state.count += num;
  },
  setUsers(state: HomeState, users: User[]) {
    // console.log('** setUsers **> ', users);
    state.users = users;
  },
};
const actions = {
  async fetchUsers(context: { commit: Commit }) {
    try {
      const res: any = await fetchUsers();
      // console.log('** fetchUsers ok **> ', res);
      context.commit('setUsers', res.list);
    } catch (e) {
      throw new Error(e);
    }
  },
};

export const home: Module<HomeState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

