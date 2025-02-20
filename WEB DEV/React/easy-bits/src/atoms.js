import { atom } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 104, // You can adjust the default value as needed
});

export const jobsCountAtom = atom({
  key: 'jobsCountAtom',
  default: 0, // Adjust this value as necessary
});

export const messagesCountAtom = atom({
  key: 'messagesCountAtom',
  default: 0, // Adjust this value as necessary
});

export const notificationsCountAtom = atom({
  key: 'notificationsCountAtom',
  default: 0, // Adjust this value as necessary
});
