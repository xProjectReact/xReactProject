import { combineReducers } from 'redux';

import liveStats from './liveStats';
import timeInfo from './timeInfo';
import locationInfo from './locationInfo';

export default combineReducers({
  timeInfo,
  liveStats,
  locationInfo
});
