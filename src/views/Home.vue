<template>
  <div class="home">
    <UserAddress />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserAddress from '@/components/UserAddress.vue';

export default defineComponent({
  name: 'Home',
  components: {
    UserAddress
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
