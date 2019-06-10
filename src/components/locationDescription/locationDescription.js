import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './locationDescription.scss';

export default function locationDescription({ description, age, dispatch }) {
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
