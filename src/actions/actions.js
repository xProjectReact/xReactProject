import {
  PASS_TIME,
  UPDATE_SLEEP,
  UPDATE_HUNGER,
  UPDATE_CURRENT_IMAGE,
  UPDATE_CURRENT_DESCRIPTION,
  UPDATE_CURRENT_LOCATION,
  UPDATE_VISIBLE_LOCATIONS
} from './types';

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

export const updateHunger = value => {
  return {
    type: UPDATE_HUNGER,
    value
  };
};

export const updateCurrentImage = source => {
  return {
    type: UPDATE_CURRENT_IMAGE,
    source
  };
};

export const updateCurrentDescription = description => {
  return {
    type: UPDATE_CURRENT_DESCRIPTION,
    description
  };
};

export const updateCurrentLocation = currentLocation => {
  return {
    type: UPDATE_CURRENT_LOCATION,
    currentLocation
  };
};

export const updateVisibleLocations = visibleLocations => {
  return {
    type: UPDATE_VISIBLE_LOCATIONS,
    visibleLocations
  };
};
