import { ActionTree } from 'vuex';
import { RollState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<RollState, RootState> = {
  doRoll: ({ commit, state }) => {
    console.log('do roll');
    for (let id = 0; id < state.rollsCount; id += 1) {
      commit('setRoll', { id, value: Math.floor(Math.random() * 6) + 1 });
    }
  },
};

export default actions;
