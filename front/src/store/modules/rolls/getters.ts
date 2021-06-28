import { GetterTree } from 'vuex';
import { RollState } from './state';
import { RootState } from '../../state';

const getters: GetterTree<RollState, RootState> = {
  isNegative: (state): boolean => (state.rollsCount <= 0),
  rollResult: (state): string | null => {
    let critical = false;
    const maxValue = state.rolls.reduce(
      (result: number | null, roll: number | null) => {
        if (!roll) {
          return null;
        }
        if ((roll < 1) || (roll > 6)) {
          return null;
        }
        if ((result === 6) && (roll === 6)) {
          critical = true;
        }
        if (!result) {
          return roll;
        }
        if (state.rollsCount <= 0) {
          return (result < roll) ? result : roll;
        }
        return (result > roll) ? result : roll;
      },
      null,
    );

    if (!maxValue) {
      return null;
    }

    if (critical) {
      return 'IMPRESSIVE';
    }
    if (maxValue >= 6) {
      return 'FULL';
    }
    if (maxValue >= 4) {
      return 'SUCCESS';
    }
    return 'FAIL';
  },
};

export default getters;
