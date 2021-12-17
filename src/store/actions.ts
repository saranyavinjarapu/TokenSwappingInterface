import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { State } from './state';

const headers = { Accept: 'application/json' };

const fetchCallCustom = async (url: string): Promise<any> => {
  return await fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error('Error fetching data', error));
};

export enum ActionTypes {
  GET_ADDRESS = 'GET_ADDRESS',
  GET_TOKENS = 'GET_TOKENS',
  GET_POOL_PRICE = 'GET_POOL_PRICE',
  CHECK_BALANCE = 'CHECK_BALANCE'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_ADDRESS]({ commit }: AugmentedActionContext): void;
  [ActionTypes.GET_TOKENS]({ commit }: AugmentedActionContext): void;
  [ActionTypes.GET_POOL_PRICE]({ commit }: AugmentedActionContext, payload: Array<string>): void;
  [ActionTypes.CHECK_BALANCE]({ commit }: AugmentedActionContext, payload: Array<any>): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_ADDRESS]({ commit }) {
    const url = './account.json';
    fetchCallCustom(url).then((result) => commit(MutationTypes.SET_ADDRESS, result.address));
  },
  async [ActionTypes.GET_TOKENS]({ commit }) {
    const url = './tokens.json';
    fetchCallCustom(url).then((result) => commit(MutationTypes.SET_TOKENS, result.tokens));
  },
  async [ActionTypes.GET_POOL_PRICE]({ commit }, payload: Array<string>) {
    const [fromToken, toToken] = payload;
    const url = './pools.json';

    fetchCallCustom(url).then((result) => {
      const poolPriceFromToToken = result.pools.filter(
        (element: any) => element.tokenA == fromToken && element.tokenB == toToken
      );
      const poolPrice = poolPriceFromToToken.length == 1 ? poolPriceFromToToken[0].price : 0;
      commit(MutationTypes.SET_POOL_PRICE, poolPrice);
    });
  },
  async [ActionTypes.CHECK_BALANCE]({ commit }, payload: Array<any>) {
    const [fromToken, swapAmount] = payload;
    const url = './balances.json';

    fetchCallCustom(url).then((result) => {
      const filteredBalanceDataForSourceToken = result.balances.filter((element: any) => element.token == fromToken);
      let balanceValidity = '';

      if (filteredBalanceDataForSourceToken.length == 1 && swapAmount) {
        const balanceAmount = parseFloat(filteredBalanceDataForSourceToken[0].balance);

        if (Math.sign(parseFloat(swapAmount)) == -1) {
          balanceValidity = 'Negative numbers are not allowed';
        } else if (balanceAmount >= swapAmount) {
          balanceValidity = 'Valid';
          commit(MutationTypes.SET_SWAP_AMOUNT, swapAmount);
        } else {
          balanceValidity = 'Balance Not Sufficient For Swap';
        }
      } else if (filteredBalanceDataForSourceToken.length == 0) {
        balanceValidity = 'No Balance Available For ' + fromToken;
      }
      commit(MutationTypes.SET_BALANCE_VALIDITY, balanceValidity);
    });
  }
};
