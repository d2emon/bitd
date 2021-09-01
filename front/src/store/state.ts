import crewTypes, { CrewType } from '@/helpers/crewType';
import districts, { District } from '@/helpers/district';
import lairs from '@/helpers/lair';
import reputationTypes from '@/helpers/reputation';
import { Crew } from '@/helpers/crew';

export interface RootState {
  title: string;
  crewTypes: CrewType[];
  districts: District[];
  lairs: string[];
  reputationTypes: string[];
  crews: Crew[];
}

const state: RootState = {
  title: 'Vuetify Admin Dashboard by ClintOxx',
  crewTypes,
  districts,
  lairs,
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
