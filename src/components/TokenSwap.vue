<template>
  <div class="tokenswap">
    <form ref="tokenswapform" @submit.prevent="false">
      <div>
        <label>Choose From Token</label>
        <select v-model="selectFromToken">
          <option v-for="token in tokenList" :value="token" :key="token">{{ token }}</option>
        </select>
      </div>
      <div>
        <label>Enter Amount to Swap</label>
        <input type="number" v-model="swapAmount" />
      </div>
      <div>
        <label>Choose To Token</label>
        <select v-model="selectToToken"></select>
      </div>
      <div>
        <label>Pool Price</label>
      </div>
      <div>
        <label>Expected Token Amount</label>
      </div>
      <br />
      <div class="button_container">
        <button type="submit">SWAP</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';

const store = useStore();
export default defineComponent({
  name: 'TokenSwap',
  data() {
    return {
      selectFromToken: '',
      swapAmount: '',
      selectToToken: ''
    };
  },

  computed: {
    tokenList(): Array<string> {
      return store.state.tokens;
    }
  },

  mounted() {
    store.dispatch(ActionTypes.GET_TOKENS);
  }
});
</script>

<style scoped lang="scss">
.tokenswap {
  padding: 20px 50px 0px 50px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #d3d3d3;
  display: flex;
}

.dark .tokenswap {
  background: #212429;
}

.tokenswap form div {
  margin-top: 20px;
  margin-bottom: 30px;
}
.tokenswap form label {
  display: inline-block;
  width: 230px;
  text-align: left;
  font-size: 20px;
}

.tokenswap form select {
  padding: 5px 20px 5px 20px;
}

.tokenswap form input {
  padding: 5px 20px 5px 20px;
  width: 55px;
  font-size: 15px;
  font-family: Arial, sans-serif;
}

.tokenswap .button_container {
  justify-content: center;
  display: flex;
  margin-top: 0px;
}
.tokenswap .button_container button {
  background: #4caf50;
  border: none;
  color: #000000;
  padding: 15px;
  border-radius: 100px;
  width: 100px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

.dark .tokenswap .button_container button {
  background: #2172e5;
  color: #ffffff;
}
</style>
