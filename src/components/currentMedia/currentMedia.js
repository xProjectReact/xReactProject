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

function CurrentMedia({ path }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={require(`../../media/${path}`)}
        title='Image'
      />
    </Card>
  );
}

const mapStateToProps = state => ({
  // Image Source
  path: state.currentMedia.path
});

export default connect(mapStateToProps)(CurrentMedia);
