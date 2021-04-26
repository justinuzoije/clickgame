import { Location } from '../enums/Location.enum'
import { Monster } from '../enums/Monster.enum'

export const destinations = {
    [Location.Forest1]: {
      image: 'forest_1.jpg',
      description: 'You approach the entrance to the forest',
      label: 'Forest Level 1',
      connections: [Location.Forest2],
      safetyLevel: 8,
      monsters: [Monster.Wolf]
    },
    [Location.Forest2]: {
      image: 'forest_2.jpg',
      description: 'You enter a maze of trees as you step deeper into the forest',
      label: 'Forest Level 2',
      connections: [Location.Forest1, Location.Forest3],
      safetyLevel: 5,
      monsters: [Monster.Bear],
    },
    [Location.Forest3]: {
        image: 'forest_3.jpg',
        description: 'You continue through the forest. Does it ever end?',
        label: 'Forest Level 3',
        connections: [Location.Forest2, Location.Forest4],
        safetyLevel: 4,
        monsters: [Monster.Wolf, Monster.Bear],
    },
    [Location.Forest4]: {
        image: 'forest_4.jpg',
        description: 'The trees thin out a bit but the air is oppressive here.',
        label: 'Forest Level 4',
        connections: [Location.Forest3],
        safetyLevel: 2,
        monsters: [Monster.Wolf, Monster.Bear],
    },
};
