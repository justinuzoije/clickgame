import { MonsterKey } from '../enums/MonsterKey.enum'

export interface Monster {
  image: string;
  description: string;
  hp: number;
}

export const monsters = {
    [MonsterKey.Wolf]: {
      image: 'wolf.png',
      description: 'Suddenly in front of you a wolf attacks!',
      hp: 5,
    } as Monster,
    [MonsterKey.Bear]: {
        image: 'bear.png',
        description: 'Suddenly in front of you a bear attacks!',
        hp: 10,
    } as Monster,
};
