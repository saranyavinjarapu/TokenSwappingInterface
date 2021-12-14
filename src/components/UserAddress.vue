<template>
  <div class="useraddress">
    <div>Current User Address</div>
    <div>
      <span>fetch user address</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAddress'
});
</script>

<style scoped lang="scss">
.useraddress {
  background: #d3d3d3;
  padding: 25px 50px 25px 50px;
  box-shadow: 2px 2px 2px 2px #808080;
  font-size: 20px;
  font-weight: bold;
  margin: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dark .useraddress {
  background: #212429;
}

.useraddress span {
  background: #ffb6c1;
  padding: 10px;
  border: 1px solid #000000;
  margin-left: 20px;
  margin-top: 30px;
}

.dark .useraddress span {
  background: #153d6f;
  opacity: 0.4;
  border: 1px solid #cccccc;
}

@media only screen and (max-width: 600px) {
  .useraddress {
    flex-direction: column;
    padding-bottom: 30px;
  }
  .useraddress div {
    margin: 10px 0px 10px 0px;
  }
  .useraddress span {
    font-size: 14px;
  }
}
</style>
