import { PASS_TIME } from '../actions/types';

const initialState = {
  currentYear: 2019,
  currentMonth: 5,
  currentDay: 8,
  currentHour: 12,
  currentMinutes: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PASS_TIME:
      return Object.assign({}, state, {
        currentHour: action.hour,
        currentMinutes: action.minutes
      });

    default:
      return state;
  }
};
