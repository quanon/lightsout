import _ from 'lodash';
import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const deepCopy = array => _.map(array, _.clone);
const getRandom = () => Math.floor(Math.random() * 5);

const store = () => new Vuex.Store({
  state: {
    matrix: new Array(5).fill(new Array(5).fill(false)),
    disabled: false
  },
  getters: {
    matrix: state => state.matrix,
    disabled: state => state.disabled
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    toggle(state, { m, n }) {
      const matrix = deepCopy(state.matrix);
      matrix[m][n] = !matrix[m][n];
      state.matrix = matrix;
    },
    enable(state) {
      state.disabled = false;
    },
    disable(state) {
      state.disabled = true;
    }
  },
  /* eslint-enable no-param-reassign */
  actions: {
    push({ commit }, { m, n }) {
      commit('toggle', { m, n });
      if (m - 1 >= 0) commit('toggle', { m: m - 1, n });
      if (n + 1 < 5) commit('toggle', { m, n: n + 1 });
      if (m + 1 < 5) commit('toggle', { m: m + 1, n });
      if (n - 1 >= 0) commit('toggle', { m, n: n - 1 });
    },
    randomize({ commit, dispatch }) {
      commit('disable');
      let i = 0;
      const intervalId = setInterval(() => {
        dispatch('push', { m: getRandom(), n: getRandom() });
        i += 1;

        if (i === 50) {
          clearInterval(intervalId);
          commit('enable');
        }
      }, 20);
    }
  }
});

export default store;
