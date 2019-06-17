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

function GymActions() {
  const classes = useStyles();

  return (
    <div className='gymActionsContainer'>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Jogging`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Yoga`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Butt workout`}
      </Button>
    </div>
  );
}

export default GymActions;
