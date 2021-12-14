import { GetterTree } from 'vuex';
import { State } from './state';

export type Getters = {
  getPoolPrice(state: State): number | string;
  getExpectedTokenConversionAmount(state: State): number;
  getBalanceValidity(state: State): string;
};

export const getters: GetterTree<State, State> & Getters = {
  getPoolPrice(state) {
    return state.poolPrice == 0 ? 'No Pool Price Available' : state.poolPrice;
  },
  getExpectedTokenConversionAmount(state) {
    return typeof state.poolPrice == 'number' && state.balanceValidity == 'Valid'
      ? parseFloat((state.swapAmount * state.poolPrice).toFixed(3))
      : 0;
  },
  getBalanceValidity(state) {
    //no need to display validity error message if input data is valid
    return state.balanceValidity == 'Valid' ? '' : state.balanceValidity;
  }
};
