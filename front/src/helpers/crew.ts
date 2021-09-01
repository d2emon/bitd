import { CrewType } from '@/helpers/crewType';

export type HoldType = 'WEAK' | 'STRONG';

export interface Crew {
  id?: string;
  title?: string;
  crewType?: CrewType;
  coins?: number;
  tier?: number;
  hold?: HoldType;
  reputation?: number;
  reputationType?: string;
  lair?: string;
}

export const HOLD_TYPES: { [k: string]: HoldType } = {
  WEAK: 'WEAK',
  STRONG: 'STRONG',
};

export const newCrew = (title: string, crewType: CrewType): Crew => ({
  title,
  crewType,
  coins: 2,
  tier: 0,
  hold: HOLD_TYPES.STRONG,
  reputation: 0,
});
