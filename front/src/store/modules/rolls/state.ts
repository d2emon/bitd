export interface RollState {
  rollsCount: number;
  rolls: (number | null)[];
}

const state: RollState = {
  rollsCount: 1,
  rolls: [
    null,
  ],
};

export default state;
