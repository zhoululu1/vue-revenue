import types from '../mutation_types';
import Client from '../resource';
// import getConfig from '../../config';


// getters
const getters = {};

const actions = {
  fetchDict({ commit, state }) {
    if (state.dicts || state.started) {
      return state.dicts || state.promise;
    }
    commit(types.CHECK_LOADING, true);
    const promise = Client.get('users/getDict').then((res) => {
      commit(types.SET_DICT, res);
      commit(types.CHECK_LOADING, false);
      return res;
    }, () => {
    });
    commit(types.SET_STARTED, promise);
    return promise;
  },
};

const mutations = {
  [types.SET_DICT](state, data) {
    state.dictlist = data;
  },
  [types.CHECK_LOADING](state, data) {
    state.loadingState = data;
  },
  [types.SET_STARTED](state, promise) {
    state.started = true;
    state.promise = promise;
  },
};

export default {
  namespaced: true,
  state: {
    started: false,
    dictlist: null,
    promise: null,
    loadingState: null,
  },
  getters,
  actions,
  mutations,
};

