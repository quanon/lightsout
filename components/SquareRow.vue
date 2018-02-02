<template>
  <div class="square-row">
    <Square v-for="(active, n) in row" :key="n" :active="active" :m="m" :n="n"/>
  </div>
</template>

<script>
import Square from '~/components/Square.vue';

export default {
  props: {
    row: Array,
    m: Number
  },
  components: {
    Square
  }
};
</script>


<style lang="scss" scoped>
.square-row {
  display: flex;
}
</style>
