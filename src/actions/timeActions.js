import { PASS_MINUTES } from './types';

export const passMinutes = minutes => {
  return {
    type: PASS_MINUTES,
    minutes
  };
};
