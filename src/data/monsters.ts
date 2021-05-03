import { Monster } from '../enums/Monster.enum'

export const monsters = {
    [Monster.Wolf]: {
      image: 'wolf.png',
      description: 'Suddenly in front of you a wolf attacks!',
      hp: 5,
    },
    [Monster.Bear]: {
        image: 'bear.png',
        description: 'Suddenly in front of you a bear attacks!',
        hp: 10,
    },
};
