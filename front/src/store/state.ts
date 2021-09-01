import crewTypes, { CrewType } from '@/helpers/crewType';
import reputationTypes from '@/helpers/reputation';
import { Crew } from '@/helpers/crew';

export interface RootState {
  title: string;
  crewTypes: CrewType[];
  reputationTypes: string[];
  crews: Crew[];
}

const state: RootState = {
  title: 'Vuetify Admin Dashboard by ClintOxx',
  crewTypes,
  reputationTypes,
  crews: [
    {
      id: 'crew-1',
      title: 'Банда 1',
      crewType: crewTypes[0],
    },
    {
      id: 'crew-2',
      title: 'Банда 2',
      crewType: crewTypes[1],
    },
  ],
};

export default state;
