export interface CrewType {
  id: string;
  title: string;
  description?: string;
  operations?: string[];
}

const crewTypes: CrewType[] = [
  {
    id: 'assassins',
    title: 'Ассасины',
    description: 'Киллеры и наёмные убийцы. Подстраивают "несчастные случаи", исчезновения, '
      + 'убийства и захваты для выкупа.',
    operations: [
      'Операция 1',
      'Операция 2',
      'Операция 3',
      'Операция 4',
    ],
  },
  {
    id: 'bravos',
    title: 'Бандиты',
    description: 'Наёмники и головорезы. Сражаются, промышляют рэкетом, вымогательством и '
      + 'погромами.',
    operations: [
      'Операция 1',
      'Операция 2',
      'Операция 3',
      'Операция 4',
    ],
  },
  {
    id: 'cult',
    title: 'Адепты',
    description: 'Служители забытого божества. Занимаются предзнаменованиями, освещением, '
      + 'жертвоприношениями и насаждением веры.',
    operations: [
      'Операция 1',
      'Операция 2',
      'Операция 3',
      'Операция 4',
    ],
  },
  {
    id: 'hawkers',
    title: 'Барыги',
    description: 'Дельцы страстями. Торгуют и производят запрещёнными товарами, налаживают сеть '
      + 'сбыта и расширяют социальные связи.',
    operations: [
      'Операция 1',
      'Операция 2',
      'Операция 3',
      'Операция 4',
    ],
  },
  {
    id: 'shadows',
    title: 'Тени',
    description: 'Воры и шпионы. Промышляют грабежами, шпионажем и диверсиями.',
    operations: [
      'Операция 1',
      'Операция 2',
      'Операция 3',
      'Операция 4',
    ],
  },
  {
    id: 'smugglers',
    title: 'Перевозчики',
    description: 'Контрабандисты и бутлегеры. Организуют поставки запрещённых товаров, '
      + 'захватывают территории, совершают вылазки за город.',
    operations: [
      'Операция 1',
      'Операция 2',
      'Операция 3',
      'Операция 4',
    ],
  },
];

export default crewTypes;
