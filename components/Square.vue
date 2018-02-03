<template>
  <button class="ui basic button" :class="classObject" @click="onClick">
  </button>
</template>

<script>
import { mapGetters } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

export default {
  props: {
    active: Boolean,
    m: Number,
    n: Number
  },
  data() {
    return {
      pushed: false
    };
  },
  methods: {
    onClick() {
      if (this.disabled) return;

      this.pushed = true;
      this.$store.dispatch('push', this.coordinate);
      setTimeout(() => {
        this.pushed = false;
      }, 50);
    }
  },
  computed: {
    coordinate() {
      return { m: this.m, n: this.n };
    },
    classObject() {
      return {
        active: this.active,
        pushed: this.pushed
      };
    },
    ...mapGetters([
      'disabled'
    ])
  }
};
</script>

<style lang="scss" scoped>
$square-width: calc((100vmin - 10.0rem) / 5);

.ui.basic.button {
  width: $square-width;
  height: $square-width;
  margin: 0.5vmin 0.25vmin;
  background-color: #e6e6e6 !important;
  box-shadow: 0 1vmin 0 #c6c6c6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .05s ease-in-out;

  &.pushed {
    box-shadow: none;
    transform: translate3d(0, 1vmin, 0);
  }

  &.active {
    background-color: #ff5d96 !important;
    box-shadow: 0 1vmin 0 #ff2a75;
  }
}
</style>
