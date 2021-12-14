import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { State } from './state';

const headers = { Accept: 'application/json' };

export enum ActionTypes {
  GET_ADDRESS = 'GET_ADDRESS',
  GET_TOKENS = 'GET_TOKENS'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_ADDRESS]({ commit }: AugmentedActionContext): void;
  [ActionTypes.GET_TOKENS]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_ADDRESS]({ commit }) {
    await fetch('./account.json', { headers })
      .then((response) => response.json())
      .then((data) => commit(MutationTypes.SET_ADDRESS, data.address))
      .catch((error) => console.error('Error fetching data', error));
  },
  async [ActionTypes.GET_TOKENS]({ commit }) {
    await fetch('./tokens.json', { headers })
      .then((response) => response.json())
      .then((data) => commit(MutationTypes.SET_TOKENS, data.tokens))
      .catch((error) => console.error('Error fetching data', error));
  }
};
