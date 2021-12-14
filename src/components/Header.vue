<template>
  <header>
    <h4>{{ mode }} mode</h4>
    TOKEN SWAPPING INTERFACE
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
  </header>
</template>

<script>
import Toggle from '@/components/Toggle';
export default {
  name: 'Header',
  props: ['mode'],
  components: {
    Toggle
  }
};
</script>

<style scoped lang="scss">
header {
  padding: 15px 30px 0px 30px;
  font-size: 35px;
  font-family: Helvetica, sans-serif;
  border-bottom: 2px solid #fff;
  transition: background 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

header h4 {
  text-transform: capitalize;
  font-style: italic;
  font-size: 30px;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
}
</style>
