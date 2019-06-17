import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CurrentMedia from '../currentMedia/currentMedia';
import LiveStatus from '../liveStatus/liveStatus';
import Actions from '../actions/actions';
import LocationDescription from '../locationDescription/locationDescription';
// import CharacterInfoModal from '../characterInfoModal/characterInfoModal';
import LocationTabs from '../locationTabs/locationTabs';
import './layout.scss';

function Layout(props) {
  const { currentLocation, visibleLocations } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <div className='homeContainer'>
          <div className='statusActionsContainer'>
            <div className='liveStatusContainer'>
              <LiveStatus />
            </div>
            <div className='actionsContainer'>
              <Actions />
            </div>
          </div>
          <div className='currentMediaContainer'>
            <CurrentMedia />
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
  visibleLocations: state.locationInfo.visibleLocations
});

export default connect(mapStateToProps)(Layout);
