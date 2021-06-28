import Vue from 'vue';
import { MutationTree } from 'vuex';
import { RollState } from './state';

const mutations: MutationTree<RollState> = {
  setRollsCount: (state, value) => {
    console.log('rollsCount', state, value);
    Vue.set(state, 'rollsCount', value);
    const rollsCount = (value > 0) ? value : 2;
    const rolls = [];
    for (let i = 0; i < rollsCount; i += 1) {
      rolls.push(null);
    }
    Vue.set(state, 'rolls', rolls);
  },
  setRoll: (state, { id, value }) => Vue.set(state.rolls, id, value),
};

export default mutations;
