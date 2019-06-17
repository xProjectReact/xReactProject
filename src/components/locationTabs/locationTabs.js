import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Home from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { updateCurrentMedia } from '../../actions/currentMediaActions';
import {
  updateCurrentDescription,
  updateCurrentLocation
} from '../../actions/locationActions';

/* Location Descriptions */
import {
  homeDescription,
  mallDescription,
  beachDescription,
  gymDescription
} from '../../textData/textData';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'wheat'
  },
  locationTab: {
    minWidth: '8vw'
  },
  tabsIndicator: {
    height: '8px',
    borderRadius: '8px',
    backgroundColor: '#f50057'
  }
});

function LocationTabs(props) {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);

  const {
    dispatch,
    visibleLocations,
    currentLocation,
    isInsideLocation
  } = props;

  function changeCurrentTab(event, currentTab) {
    setCurrentTab(currentTab);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        classes={{ indicator: classes.tabsIndicator }}
        value={currentTab}
        onChange={changeCurrentTab}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        {visibleLocations.homeIsVisible && (
          <Tab
            disabled={currentLocation === 'home' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('home'));
              dispatch(updateCurrentMedia(`locations/fromOutside/home.webp`));
              dispatch(updateCurrentDescription(homeDescription));
            }}
            className={classes.locationTab}
            label='Home'
            icon={<Home />}
          />
        )}
        {visibleLocations.beachIsVisible && (
          <Tab
            disabled={currentLocation === 'beach' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('beach'));
              dispatch(
                updateCurrentMedia(
                  `locations/${
                    isInsideLocation ? 'fromInside' : 'fromOutside'
                  }/beach.webp`
                )
              );
              dispatch(updateCurrentDescription(beachDescription));
            }}
            className={classes.locationTab}
            label='Beach'
            icon={<FavoriteIcon />}
          />
        )}
        {visibleLocations.mallIsVisible && (
          <Tab
            disabled={currentLocation === 'mall' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('mall'));
              dispatch(
                updateCurrentMedia(
                  `locations/${
                    isInsideLocation ? 'fromInside' : 'fromOutside'
                  }/mall.webp`
                )
              );
              dispatch(updateCurrentDescription(mallDescription));
            }}
            className={classes.locationTab}
            label='Mall'
            icon={<FavoriteIcon />}
          />
        )}
        {visibleLocations.gymIsVisible && (
          <Tab
            disabled={currentLocation === 'gym' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('gym'));
              dispatch(
                updateCurrentMedia(
                  `locations/${
                    isInsideLocation ? 'fromInside' : 'fromOutside'
                  }/gym.webp`
                )
              );
              dispatch(updateCurrentDescription(gymDescription));
            }}
            className={classes.locationTab}
            label='Gym'
            icon={<FavoriteIcon />}
          />
        )}
      </Tabs>
    </Paper>
  );
}

const mapStateToProps = state => ({
  // Locations Info
  isInsideLocation: state.locationInfo.isInsideLocation
});

export default connect(mapStateToProps)(LocationTabs);
