import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import home from '../../images/house.jpg';
import LocationDescription from '../locationDescription/locationDescription';
import './layout.scss';

import {homeDescription} from '../../textData/textData';

function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='100%'>
        <div className='homeContainer'>
          <img src={home} alt='home' className='homeImage' />
          <div className='locationDescriptionContainer'>
            <LocationDescription description={homeDescription} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
