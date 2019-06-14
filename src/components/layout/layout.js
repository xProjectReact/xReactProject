import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CurrentImage from '../currentImage/currentImage';
import LiveStatus from '../liveStatus/liveStatus';
import Actions from '../actions/actions';
import LocationDescription from '../locationDescription/locationDescription';
// import CharacterInfoModal from '../characterInfoModal/characterInfoModal';
import LocationTabs from '../locationTabs/locationTabs';
import './layout.scss';

function Layout(props) {
  const currentLocation = props.currentLocation;
  const visibleLocations = {
    homeIsVisible: props.homeIsVisible,
    beachIsVisible: props.beachIsVisible,
    mallIsVisible: props.mallIsVisible,
    gymIsVisible: props.gymIsVisible
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <div className='homeContainer'>
          <div className='liveStatusContainer'>
            <LiveStatus />
            <div className='actionsContainer'>
              <Actions />
            </div>
          </div>
          <div className='currentImageContainer'>
            <CurrentImage />
          </div>
          <div className='locationDescriptionContainer'>
            <LocationDescription />
          </div>
          {/* <div className='charInfoMenu'>
            <CharacterInfoModal />
          </div> */}
          <div className='locationTabsContainer'>
            <LocationTabs
              visibleLocations={visibleLocations}
              currentLocation={currentLocation}
            />
          </div>
          {/* <div className='locationDescriptionContainer'>
            <LocationDescription />
          </div> */}
        </div>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  //  Locations that should be displayed, boolean
  currentLocation: state.locationInfo.currentLocation,

  homeIsVisible: state.locationInfo.visibleLocations.homeIsVisible,
  beachIsVisible: state.locationInfo.visibleLocations.beachIsVisible,
  mallIsVisible: state.locationInfo.visibleLocations.mallIsVisible,
  gymIsVisible: state.locationInfo.visibleLocations.gymIsVisible
});

export default connect(mapStateToProps)(Layout);
