import { PASS_TIME } from './types';
import { UPDATE_SLEEP } from './types';

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
