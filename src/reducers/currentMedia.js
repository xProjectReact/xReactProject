import { UPDATE_CURRENT_MEDIA } from '../actions/types';

const initialState = {
  path: 'locations/fromInside/home.webp'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_MEDIA:
      return Object.assign({}, state, {
        path: action.path
      });

    default:
      return state;
  }
};
