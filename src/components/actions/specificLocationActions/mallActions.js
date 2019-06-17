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

function MallActions() {
  const classes = useStyles();

  return (
    <div className='mallActionsContainer'>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Clothing Store`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Footweat Store`}
      </Button>
      <Button variant='contained' color='secondary' className={classes.button}>
        {`Products Store`}
      </Button>
    </div>
  );
}

export default MallActions;
