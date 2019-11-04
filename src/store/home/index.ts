// vuex
import { Module } from 'vuex';
import { HomeState } from '@/store/home/interface';
import { RootState } from '../types';

const state: HomeState = {
  count: 0,
};

const getters = {
  count: (state: HomeState) => state.count,
};

const mutations = {
  increment(state: HomeState, num: number) {
    state.count += num;
  },
};

export const home: Module<HomeState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
};

