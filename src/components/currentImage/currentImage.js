import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  card: {},
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}));

function CurrentImage({ source }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={require(`../../images/${source}.webp`)}
        title='Image'
      />
    </Card>
  );
}

const mapStateToProps = state => ({
  // Image Source
  source: state.locationInfo.source
});

export default connect(mapStateToProps)(CurrentImage);
