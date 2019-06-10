import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Home from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'wheat'
  },
  locationTab: {
    minWidth: '8vw'
  }
});

function LocationTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab className={classes.locationTab} label='Home' icon={<Home />} />
        <Tab
          className={classes.locationTab}
          label='Beach'
          icon={<FavoriteIcon />}
        />
        <Tab
          className={classes.locationTab}
          label='Mall'
          icon={<FavoriteIcon />}
        />
        <Tab
          className={classes.locationTab}
          label='Gym'
          icon={<FavoriteIcon />}
        />
      </Tabs>
    </Paper>
  );
}

export default LocationTabs;
