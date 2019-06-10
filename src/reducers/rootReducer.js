import { combineReducers } from 'redux';
import liveStats from './liveStats';
import timeInfo from './timeInfo';

export default combineReducers({
  timeInfo,
  liveStats
});
