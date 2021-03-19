import { atom, atomFamily } from 'recoil';
import { Location } from '../enums/Location.enum';

export const locationState = atom({
    key: 'locationState', // unique ID (with respect to other atoms/selectors)
    default: Location.ForestEntrance, // default value (aka initial value)
  });

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

export const MenuState = atom({
    key: 'MenuState', // unique ID (with respect to other atoms/selectors)
    default: '------', // default value (aka initial value)
  });
