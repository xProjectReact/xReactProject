import {
  UPDATE_CURRENT_IMAGE,
  UPDATE_CURRENT_DESCRIPTION,
  UPDATE_CURRENT_LOCATION,
  UPDATE_VISIBLE_LOCATIONS
} from '../actions/types';

const initialState = {
  source: 'default',
  description: 'default',
  currentLocation: 'default',
  visibleLocations: {
    homeIsVisible: true,
    beachIsVisible: true,
    mallIsVisible: true,
    gymIsVisible: true
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_IMAGE:
      return Object.assign({}, state, {
        source: action.source
      });
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

    default:
      return state;
  }
};
