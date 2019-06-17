import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import { updateCurrentMedia } from '../../actions/currentMediaActions';
import {
  updateCurrentDescription,
  updateCurrentLocation
} from '../../actions/locationActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrellaBeach,
  faShoppingBag,
  faDumbbell,
  faMugHot
} from '@fortawesome/free-solid-svg-icons';

/* Location Descriptions */
import {
  homeDescription,
  mallDescription,
  beachDescription,
  gymDescription,
  caffeDescription
} from '../../textData/textData';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'wheat'
  },
  locationTab: {
    minWidth: '8vw',
    color: 'rgba(0, 0, 0, 0.84)'
  },
  tabsIndicator: {
    height: '8px',
    borderRadius: '8px',
    backgroundColor: '#f50057'
  },
  selectedTab: {
    color: '#f50057 !important'
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
            classes={{ selected: classes.selectedTab }}
          />
        )}
        {visibleLocations.beachIsVisible && (
          <Tab
            disabled={currentLocation === 'beach' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('beach'));
              dispatch(updateCurrentMedia(`locations/fromOutside/beach.webp`));
              dispatch(updateCurrentDescription(beachDescription));
            }}
            className={classes.locationTab}
            label='Beach'
            icon={<FontAwesomeIcon icon={faUmbrellaBeach} />}
            classes={{ selected: classes.selectedTab }}
          />
        )}
        {visibleLocations.mallIsVisible && (
          <Tab
            disabled={currentLocation === 'mall' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('mall'));
              dispatch(updateCurrentMedia(`locations/fromOutside/mall.webp`));
              dispatch(updateCurrentDescription(mallDescription));
            }}
            className={classes.locationTab}
            label='Mall'
            icon={<FontAwesomeIcon icon={faShoppingBag} />}
            classes={{ selected: classes.selectedTab }}
          />
        )}
        {visibleLocations.gymIsVisible && (
          <Tab
            disabled={currentLocation === 'gym' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('gym'));
              dispatch(updateCurrentMedia(`locations/fromOutside/gym.webp`));
              dispatch(updateCurrentDescription(gymDescription));
            }}
            className={classes.locationTab}
            label='Gym'
            icon={<FontAwesomeIcon icon={faDumbbell} />}
            classes={{ selected: classes.selectedTab }}
          />
        )}
        {visibleLocations.caffeIsVisible && (
          <Tab
            disabled={currentLocation === 'caffe' || isInsideLocation}
            onClick={() => {
              dispatch(updateCurrentLocation('caffe'));
              dispatch(updateCurrentMedia(`locations/fromOutside/caffe.webp`));
              dispatch(updateCurrentDescription(caffeDescription));
            }}
            className={classes.locationTab}
            label='Caffe'
            icon={<FontAwesomeIcon icon={faMugHot} />}
            classes={{ selected: classes.selectedTab }}
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
