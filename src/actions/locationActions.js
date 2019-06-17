import {
  UPDATE_CURRENT_DESCRIPTION,
  UPDATE_CURRENT_LOCATION,
  UPDATE_VISIBLE_LOCATIONS,
  UPDATE_INSIDE_LOCATION
} from './types';

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

export const updateInsideLocation = value => {
  return {
    type: UPDATE_INSIDE_LOCATION,
    value
  };
};
