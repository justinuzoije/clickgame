import { Location } from '../enums/Location.enum'

export const destinations = {
    [Location.Forest]: {
      image: 'forest.jpg',
      description: 'You walk into a mysterious field of green',
      label: 'Forest',
    },
    [Location.ForestEntrance]: {
      image: 'forest_entrance.jpg',
      description: 'You enter a maze of trees as you step deeper into the forest',
      label: 'Forest Entrance',
    },
    [Location.Forest3]: {
        image: 'forest3.jpg',
        description: 'You continue through the forest. Does it ever end?',
        label: 'Forest 3',
    },
    [Location.Forest4]: {
        image: 'forest4.jpg',
        description: 'The trees thin out a bit but the air is oppressive here.',
        label: 'Forest 4',
    },
};
