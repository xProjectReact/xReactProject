import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './locationDescription.scss';

function locationDescription({ description }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className='descriptionContainer'>
          <p>{description}</p>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default locationDescription;
