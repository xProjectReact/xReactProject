import { UPDATE_AGE } from './types';
import { PASS_TIME } from './types';
import { UPDATE_SLEEP } from './types';

export const updateAge = age => {
  return {
    type: UPDATE_AGE,
    age: age
  };
};

export const passTime = (hour, minutes) => {
  return {
    type: PASS_TIME,
    hour,
    minutes
  };
};

export const updateSleep = value => {
  return {
    type: UPDATE_SLEEP,
    value
  };
};
