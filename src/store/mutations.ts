import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
  SET_ADDRESS = 'SET_ADDRESS',
  SET_TOKENS = 'SET_TOKENS',
  SET_POOL_PRICE = 'SET_POOL_PRICE'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_ADDRESS](state: S, payload: string): void;
  [MutationTypes.SET_TOKENS](state: S, payload: Array<string>): void;
  [MutationTypes.SET_POOL_PRICE](state: S, payload: number): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ADDRESS](state: State, payload: string) {
    state.userAddress = payload;
  },
  [MutationTypes.SET_TOKENS](state: State, payload: Array<string>) {
    state.tokens = payload;
  },
  [MutationTypes.SET_POOL_PRICE](state: State, payload: number) {
    state.poolPrice = payload;
  }
};
