import { District } from '@/helpers/district';

export interface Lair {
  district?: District;
  description?: string;
}

export interface HuntingGround extends Lair {
  operations?: string;
}

const lairs: string[] = [
  'Полузатонувший грот в городской системе канализации',
  'Заброшенная башня в старом городе',
  'Незанятое складское помещение',
  'Маленький покинутый дом в неблагополучном районе',
  'Сошедший с рельс, сломанный и оставленный гнить вагон',
];

export default lairs;
