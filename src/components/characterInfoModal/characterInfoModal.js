import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Assessment from '@material-ui/icons/Assessment';
import Grade from '@material-ui/icons/Grade';

import './characterInfoModal.scss';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

function CharacterInfoModal() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Character Info', 'Stats', 'Skills'].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === 'Character Info' && <AccountCircle />}
              {text === 'Stats' && <Assessment />}
              {text === 'Skills' && <Grade />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)} style={{ color: 'white' }}>
        <SettingsIcon />
      </Button>
      <Drawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default CharacterInfoModal;
