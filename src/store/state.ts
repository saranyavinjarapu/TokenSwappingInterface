export type State = {
  userAddress: string;
  tokens: Array<string>;
  poolPrice: number;
};
export const state: State = {
  userAddress: '',
  tokens: [],
  poolPrice: 0
};
