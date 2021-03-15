import { atom, atomFamily } from 'recoil';

export const locationState = atom({
    key: 'locationState', // unique ID (with respect to other atoms/selectors)
    default: 'forest_entrance.jpg', // default value (aka initial value)
  });
