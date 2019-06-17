import React from 'react';
import { connect } from 'react-redux';
import { passMinutes } from '../../actions/timeActions';
import { updateCurrentMedia } from '../../actions/currentMediaActions';
import { updateInsideLocation } from '../../actions/locationActions';
import { updateHunger, updateSleep } from '../../actions/liveStatsActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './actions.scss';

import AccessTime from '@material-ui/icons/AccessTime';
import NavigationIcon from '@material-ui/icons/Navigation';

import HomeActions from './specificLocationActions/homeActions';
import BeachActions from './specificLocationActions/beachActions';
import MallActions from './specificLocationActions/mallActions';
import GymActions from './specificLocationActions/gymActions';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Actions(props) {
  const classes = useStyles();
  const { dispatch, isInsideLocation, currentLocation } = props;

  return (
    <div className='actionsContainer'>
      {!isInsideLocation ? (
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={() => {
            dispatch(updateInsideLocation(true));
            dispatch(
              updateCurrentMedia(`locations/fromInside/${currentLocation}.webp`)
            );
          }}
        >
          <NavigationIcon className={classes.leftIcon} />
          {`Go Inside`}
        </Button>
      ) : (
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={() => {
            dispatch(updateInsideLocation(false));
            dispatch(
              updateCurrentMedia(
                `locations/fromOutside/${currentLocation}.webp`
              )
            );
          }}
        >
          <NavigationIcon className={classes.leftIcon} />
          {`Go Outside`}
        </Button>
      )}
      {isInsideLocation && currentLocation === 'home' && <HomeActions />}
      {isInsideLocation && currentLocation === 'beach' && <BeachActions />}
      {isInsideLocation && currentLocation === 'mall' && <MallActions />}
      {isInsideLocation && currentLocation === 'gym' && <GymActions />}

      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        onClick={() => {
          dispatch(passMinutes(30));
          dispatch(updateSleep(-2));
          dispatch(updateHunger(-2));
        }}
      >
        <AccessTime className={classes.leftIcon} />
        {`Wait (30 min)`}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  // Location Info
  currentLocation: state.locationInfo.currentLocation,
  isInsideLocation: state.locationInfo.isInsideLocation
});

export default connect(mapStateToProps)(Actions);
