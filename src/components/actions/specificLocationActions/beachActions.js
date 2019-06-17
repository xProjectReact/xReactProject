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

function BeachActions() {
  const classes = useStyles();

  return (
    <div className='beachActionsContainer'>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Swim`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Tan`}
      </Button>
    </div>
  );
}

export default BeachActions;
