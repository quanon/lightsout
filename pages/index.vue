<template>
  <div id="app">
    <div class="ui container">
      <SquareMatrix/>
    </div>
  </div>
</template>

<script>
import SquareMatrix from '~/components/SquareMatrix.vue';

export default {
  components: {
    SquareMatrix
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
