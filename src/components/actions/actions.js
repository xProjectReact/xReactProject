import React from 'react';
import { connect } from 'react-redux';
import { passTime, updateSleep, updateHunger } from '../../actions/actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './actions.scss';

import AccessTime from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Actions({
  currentMinutes,
  currentHour,
  // currentDay,
  // currentMonth,
  // currentYear,
  sleepValue,
  hungerValue,
  dispatch
}) {
  const classes = useStyles();

  let sleep = sleepValue - 2;
  let hunger = hungerValue - 2;

  let hour = currentHour;
  let minutes = currentMinutes + 30;

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
  if (hunger < 0) {
    hunger = 0;
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
          dispatch(updateHunger(hunger));
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
  hungerValue: state.liveStats.hunger,

  // Time Values
  currentYear: state.timeInfo.currentYear,
  currentMonth: state.timeInfo.currentMonth,
  currentDay: state.timeInfo.currentDay,
  currentHour: state.timeInfo.currentHour,
  currentMinutes: state.timeInfo.currentMinutes
});

export default connect(mapStateToProps)(Actions);
