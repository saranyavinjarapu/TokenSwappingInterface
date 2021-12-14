<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  data() {
    return {
      mode: 'light'
    };
  },
  components: {
    Header
  },
  created() {
    window.addEventListener('keyup', this.keyPress);
  },
  methods: {
    keyPress(e) {
      if (e.key === 't') {
        this.toggle();
      }
    },
    toggle() {
      if (this.mode === 'dark') {
        this.mode = 'light';
      } else {
        this.mode = 'dark';
      }
    }
  }
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
