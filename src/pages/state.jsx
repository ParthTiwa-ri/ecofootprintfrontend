import { atom } from "recoil";

export const coin = atom({
    key: 'coin', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });