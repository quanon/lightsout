<template>
  <div id="app">
    <div class="ui container">
      <SquareMatrix/>
      <RandomizeButton/>
    </div>
  </div>
</template>

<script>
import SquareMatrix from '~/components/SquareMatrix.vue';
import RandomizeButton from '~/components/RandomizeButton.vue';

export default {
  components: {
    SquareMatrix,
    RandomizeButton
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
