export type State = {
  userAddress: string;
  tokens: Array<string>;
  poolPrice: number;
  balanceValidity: string;
  swapAmount: number;
  expectedConversionTokens: number;
};
export const state: State = {
  userAddress: '',
  tokens: [],
  poolPrice: 0,
  balanceValidity: '',
  swapAmount: 0,
  expectedConversionTokens: 0
};
