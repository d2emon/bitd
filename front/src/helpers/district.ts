export interface District {
  id: string;
  title: string;
  description?: string;
}

const districts: District[] = [
  {
    id: 'crows-foot',
    title: 'Вороний перекресток',
    description: '',
  },
];

export default districts;
