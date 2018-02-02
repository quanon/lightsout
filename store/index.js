import _ from 'lodash';
import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const deepCopy = array => _.map(array, _.clone);

const store = () => new Vuex.Store({
  state: {
    matrix: new Array(5).fill(new Array(5).fill(false))
  },
  getters: {
    matrix: state => state.matrix
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    toggle(state, { m, n }) {
      const matrix = deepCopy(state.matrix);
      matrix[m][n] = !matrix[m][n];
      state.matrix = matrix;
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
    }
  }
});

export default store;
