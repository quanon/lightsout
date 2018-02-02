<template>
  <div class="square-matrix">
    <SquareRow v-for="(row, m) in matrix" :key="m" :row="row" :m="m"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import SquareRow from '~/components/SquareRow.vue';

export default {
  components: {
    SquareRow
  },
  computed: {
    ...mapGetters([
      'matrix'
    ])
  }
};
</script>


<style lang="scss" scoped>
.square-matrix {
  display: flex;
  flex-direction: column;
}
</style>
