import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import home from '../../images/house.jpg';
import LiveStatus from '../liveStatus/liveStatus';
import Actions from '../actions/actions';
import LocationDescription from '../locationDescription/locationDescription';
import CharacterInfoModal from '../characterInfoModal/characterInfoModal';
import LocationTabs from '../locationTabs/locationTabs';
import './layout.scss';

import { homeDescription } from '../../textData/textData';

function Layout() {
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
          <img src={home} alt='home' className='homeImage' />
          <div className='locationDescriptionContainer'>
            <LocationDescription description={homeDescription} />
          </div>
          <div className='charInfoMenu'>
            <CharacterInfoModal />
          </div>
          <div className='locationTabsContainer'>
            <LocationTabs />{' '}
          </div>
          {/* <div className='locationDescriptionContainer'>
            <LocationDescription />{' '}
          </div> */}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
