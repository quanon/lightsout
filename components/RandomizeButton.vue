<template>
  <button class="ui small button" @click="onClick">
    Randamize
  </button>
</template>

<script>
import { mapGetters } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

export default {
  methods: {
    onClick() {
      if (this.disabled) return;

      this.$store.dispatch('randomize');
    }
  },
  computed: {
    ...mapGetters([
      'disabled'
    ])
  }
};
</script>

<style lang="scss" scoped>
.ui.button {
  margin-top: 2.0rem !important;
}
</style>
