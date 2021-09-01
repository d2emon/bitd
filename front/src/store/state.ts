import { Crew } from '@/helpers/crew';

export interface RootState {
  title: string;
  crews: Crew[];
}

const state: RootState = {
  title: 'Vuetify Admin Dashboard by ClintOxx',
  crews: [
    {
      id: 'crew-1',
      title: 'Банда 1',
      crewType: 'Crew Type',
    },
    {
      id: 'crew-2',
      title: 'Банда 2',
      crewType: 'Crew Type',
    },
  ],
};

export default state;
