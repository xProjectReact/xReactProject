import {
  UPDATE_CURRENT_DESCRIPTION,
  UPDATE_CURRENT_LOCATION,
  UPDATE_VISIBLE_LOCATIONS,
  UPDATE_INSIDE_LOCATION
} from '../actions/types';

const initialState = {
  description: 'Your beloved small house.',
  currentLocation: 'home',
  isInsideLocation: true,
  visibleLocations: {
    homeIsVisible: true,
    beachIsVisible: true,
    mallIsVisible: true,
    gymIsVisible: true,
    caffeIsVisible: true
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_DESCRIPTION:
      return Object.assign({}, state, {
        description: action.description
      });
    case UPDATE_CURRENT_LOCATION:
      return Object.assign({}, state, {
        currentLocation: action.currentLocation
      });
    case UPDATE_VISIBLE_LOCATIONS:
      return Object.assign({}, state, {
        visibleLocations: action.visibleLocations
      });
    case UPDATE_INSIDE_LOCATION:
      return Object.assign({}, state, {
        isInsideLocation: action.value
      });

    default:
      return state;
  }
};
