import { Location } from '../enums/Location.enum'

export const destinations = {
    [Location.Forest1]: {
      image: 'forest_1.jpg',
      description: 'You approach the entrance to the forest',
      label: 'Forest Level 1',
    },
    [Location.Forest2]: {
      image: 'forest_2.jpg',
      description: 'You enter a maze of trees as you step deeper into the forest',
      label: 'Forest Level 2',
    },
    [Location.Forest3]: {
        image: 'forest_3.jpg',
        description: 'You continue through the forest. Does it ever end?',
        label: 'Forest Level 3',
    },
    [Location.Forest4]: {
        image: 'forest_4.jpg',
        description: 'The trees thin out a bit but the air is oppressive here.',
        label: 'Forest Level 4',
    },
};
