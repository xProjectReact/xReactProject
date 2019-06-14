import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './locationDescription.scss';

function LocationDescription({ description, age, dispatch }) {
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

const mapStateToProps = state => ({
  // Location Description
  description: state.locationInfo.description
});

export default connect(mapStateToProps)(LocationDescription);
