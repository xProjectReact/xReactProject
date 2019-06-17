import {
  UPDATE_HEALTH,
  UPDATE_SLEEP,
  UPDATE_HUNGER,
  UPDATE_MOOD,
  UPDATE_CLEANLINESS,
  UPDATE_AROUSAL
} from './types';

export const updateHealth = value => {
  return {
    type: UPDATE_HEALTH,
    value
  };
};

export const updateHunger = value => {
  return {
    type: UPDATE_HUNGER,
    value
  };
};
export const updateSleep = value => {
  return {
    type: UPDATE_SLEEP,
    value
  };
};

export const updateMood = value => {
  return {
    type: UPDATE_MOOD,
    value
  };
};
export const updateCleanliness = value => {
  return {
    type: UPDATE_CLEANLINESS,
    value
  };
};

export const updateArousal = value => {
  return {
    type: UPDATE_AROUSAL,
    value
  };
};
