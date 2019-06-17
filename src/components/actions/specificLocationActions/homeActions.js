import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#282c34'
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

function HomeActions() {
  const classes = useStyles();

  return (
    <div className='homeActionsContainer'>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Kitchen`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Living Room`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Bathroom`}
      </Button>
    </div>
  );
}

export default HomeActions;
