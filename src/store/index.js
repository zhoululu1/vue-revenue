import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    record,
    oss,
    order,
    dicts,
    recharge,
    mt,
  },
});

export default store;
