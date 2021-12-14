import { GetterTree } from 'vuex';
import { State } from './state';

export type Getters = {
  getPoolPrice(state: State): number | string;
};

export const getters: GetterTree<State, State> & Getters = {
  getPoolPrice(state) {
    return state.poolPrice == 0 ? 'No Pool Price Available' : state.poolPrice;
  }
};
