<template>
  <div class="app"><Header></Header></div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #ffb6c1;
  color: #15202b;
}
</style>
