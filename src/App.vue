<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
    <Home :mode="mode"></Home>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Home from '@/views/Home.vue';

export default {
  data() {
    return {
      mode: 'light'
    };
  },
  components: {
    Header,
    Home
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
  transition: background 0.3s ease-in-out;
}
.dark {
  background: #343044;
  color: #e8e8e8;
}
</style>
