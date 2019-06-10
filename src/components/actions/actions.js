import React from 'react';
import { connect } from 'react-redux';
import { passTime } from '../../actions/actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './actions.scss';

import AccessTime from '@material-ui/icons/AccessTime';
import { updateSleep } from '../../actions/actions';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Actions({ currentMinutes, currentHour, sleepValue, dispatch }) {
  const classes = useStyles();

  let hour = currentHour;
  let minutes = currentMinutes + 30;
  let sleep = sleepValue - 2;

  if (minutes > 59) {
    minutes = currentMinutes - 30;
    if (hour === 23) {
      hour = 0;
    } else {
      hour++;
    }
  }

  if (sleep < 0) {
    sleep = 0;
  }

  return (
    <div className='actionsContainer'>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        onClick={() => {
          dispatch(passTime(hour, minutes));
          dispatch(updateSleep(sleep));
        }}
      >
        <AccessTime className={classes.leftIcon} />
        {`Wait (30 min)`}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  // Stats Values
  sleepValue: state.liveStats.sleep,

  // Time Values
  currentYear: state.timeInfo.currentYear,
  currentMonth: state.timeInfo.currentMonth,
  currentDay: state.timeInfo.currentDay,
  currentHour: state.timeInfo.currentHour,
  currentMinutes: state.timeInfo.currentMinutes
});

export default connect(mapStateToProps)(Actions);
