<template>
  <div class="home">
    <UserAddress />
    <TokenSwap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserAddress from '@/components/UserAddress.vue';
import TokenSwap from '@/components/TokenSwap.vue';

export default defineComponent({
  name: 'Home',
  components: {
    UserAddress,
    TokenSwap
  }
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
