<template>
  <div class="tokenswap">
    <form ref="tokenswapform" @submit.prevent="submitForm">
      <div>
        <label>Choose From Token</label>
        <select v-model="selectFromToken" @change="onTokenSelect('fromToken')">
          <option v-for="token in tokenList" :value="token" :key="token">{{ token }}</option>
        </select>
      </div>
      <div>
        <label>Enter Amount to Swap</label>
        <input type="number" v-model="swapAmount" @input="swapAmountEntered" onkeydown="return event.keyCode !== 69" />
        <span className="errormessage" v-if="balanceValidityCheck">{{ balanceValidityCheck }}</span>
      </div>
      <div>
        <label>Choose To Token</label>
        <select v-model="selectToToken" @change="onTokenSelect('toToken')">
          <option v-for="token in tokenList" :value="token" :key="token">{{ token }}</option>
        </select>
      </div>
      <div v-if="selectFromToken && selectToToken && poolPrice">
        <label>Pool Price</label>
        <span class="displayvalues">{{ poolPrice }}</span>
      </div>
      <div v-if="expectedTokenAmount && swapAmount">
        <label>Expected Token Amount</label>
        <span class="displayvalues">{{ expectedTokenAmount }} &nbsp;&nbsp;Tokens</span>
      </div>
      <br />
      <div v-if="expectedTokenAmount && swapAmount" class="button_container">
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
    },
    poolPrice(): number | string {
      return store.getters.getPoolPrice;
    },
    balanceValidityCheck(): string {
      return store.getters.getBalanceValidity;
    },
    expectedTokenAmount(): number {
      return store.getters.getExpectedTokenConversionAmount;
    }
  },

  mounted() {
    store.dispatch(ActionTypes.GET_TOKENS);
  },

  methods: {
    async onTokenSelect(tokenType: string): Promise<void> {
      if (tokenType == 'fromToken') this.checkBalance();

      if (this.selectFromToken && this.selectToToken) {
        store.dispatch(ActionTypes.GET_POOL_PRICE, [this.selectFromToken, this.selectToToken]);
      }
    },

    async swapAmountEntered(): Promise<void> {
      if (this.selectFromToken) {
        this.checkBalance();
      }
    },

    async checkBalance(): Promise<void> {
      store.dispatch(ActionTypes.CHECK_BALANCE, [this.selectFromToken, this.swapAmount]);
    },
    async submitForm() {
      alert('Token Swap From ' + this.selectFromToken + ' To ' + this.selectToToken + 'Successful');
      window.location.reload();
    }
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
  padding: 5px 0px 5px 20px;
  width: 75px;
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

.tokenswap .errormessage {
  background: #fce4e4;
  border: 1px solid #fcc2c3;
  color: #cc0033;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 5px;
  margin-left: 10px;
}

.tokenswap .displayvalues {
  border: 1px solid #858585;
  padding: 5px 25px 5px 25px;
  background: #ffb6c1;
  font-size: 17px;
  font-family: Arial, sans-serif;
}

.dark .tokenswap .displayvalues {
  background: #153d6f;
  opacity: 0.4;
}

@media only screen and (max-width: 700px) {
  .tokenswap .errormessage {
    display: block;
    margin-top: 25px;
    text-align: center;
    padding: 6px;
  }
  .tokenswap .displayvalues {
    padding: 5px;
    font-size: 15px;
    width: 150px;
  }
}
</style>
