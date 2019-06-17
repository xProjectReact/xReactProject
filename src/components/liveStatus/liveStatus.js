import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ProgressBar from '../progressBar/progressBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*  Mood Icons */
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import OfflineBolt from '@material-ui/icons/OfflineBolt';
import LocalHospital from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { faShower, faUtensils } from '@fortawesome/free-solid-svg-icons';

import './liveStatus.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'wheat',
    borderRadius: '4px'
  },
  progressBarPosition: {
    position: 'absolute',
    left: '2.5vw',
    top: '40px',
    width: '24vw'
  },
  timeInfoContainer: {
    justifyContent: 'center'
  },
  timeInfo: {
    padding: theme.spacing(3, 2),
    textAlign: 'center'
  },
  icons: {
    color: '#4ee44e'
  },
  avatarContainer: {
    backgroundColor: '#282c34'
  }
}));

function LiveStatus(props) {
  const classes = useStyles();
  const {
    moodValue,
    sleepValue,
    healthValue,
    cleanlinessValue,
    hungerValue,
    arousalValue,
    currentDate
  } = props;

  const moodIcon =
    moodValue < 25 ? (
      <SentimentVeryDissatisfied className={classes.icons} />
    ) : moodValue < 50 ? (
      <SentimentDissatisfied className={classes.icons} />
    ) : moodValue < 75 ? (
      <SentimentSatisfied className={classes.icons} />
    ) : (
      <SentimentVerySatisfied className={classes.icons} />
    );

  let dateOptions = {
    hour12: false,
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

  return (
    <List className={classes.root}>
      <ListItem className={classes.timeInfoContainer}>
        <Paper className={classes.timeInfo}>
          <Typography variant='h5' component='h3'>
            {currentDate.toLocaleString('en-US', dateOptions)}
          </Typography>
        </Paper>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarContainer}>
            <LocalHospital className={classes.icons} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Health' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={healthValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarContainer}>
            <OfflineBolt className={classes.icons} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Sleep' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={sleepValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarContainer}>{moodIcon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary='Mood' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={moodValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarContainer}>
            <FontAwesomeIcon className={classes.icons} icon={faShower} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Cleanliness' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={cleanlinessValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarContainer}>
            <FontAwesomeIcon className={classes.icons} icon={faUtensils} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Hunger' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={hungerValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarContainer}>
            <FavoriteIcon className={classes.icons} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Arousal' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={arousalValue} />
        </Container>
      </ListItem>
    </List>
  );
}

const mapStateToProps = state => ({
  // Stats Values
  moodValue: state.liveStats.mood,
  sleepValue: state.liveStats.sleep,
  healthValue: state.liveStats.health,
  cleanlinessValue: state.liveStats.cleanliness,
  hungerValue: state.liveStats.hunger,
  arousalValue: state.liveStats.arousal,

  // Time Values
  currentDate: state.timeInfo.currentDate
});

export default connect(mapStateToProps)(LiveStatus);
