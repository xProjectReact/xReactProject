import { PASS_MINUTES } from '../actions/types';

const initialState = {
  currentDate: new Date(2019, 5, 1, 12, 0) // Year, month, day, hour, minutes
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PASS_MINUTES:
      return Object.assign({}, state, {
        currentDate: new Date(
          state.currentDate.setTime(
            state.currentDate.getTime() + action.minutes * 60 * 1000
          )
        )
      });

    default:
      return state;
  }
};
