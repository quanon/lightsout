<template>
  <button class="ui basic button" :class="classObject" @click="onClick">
  </button>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.ui.basic.button {
  width: 10vmin;
  height: 10vmin;
  margin: 0.5vmin 0.25vmin;
  background-color: #e6e6e6 !important;
  box-shadow: 0 1vmin 0 #c6c6c6;
  display: flex;
  justify-content: center;
  align-items: center;

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
