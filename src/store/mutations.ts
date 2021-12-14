import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
  SET_ADDRESS = 'SET_ADDRESS'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_ADDRESS](state: S, payload: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ADDRESS](state: State, payload: string) {
    state.userAddress = payload;
  }
};
