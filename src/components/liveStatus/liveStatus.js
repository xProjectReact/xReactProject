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

/*  Mood Icons */
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';

/* Sleep Icons */
import OfflineBolt from '@material-ui/icons/OfflineBolt';

/* Health Icons */
import LocalHospital from '@material-ui/icons/LocalHospital';
// import Accessibility from '@material-ui/icons/Accessibility';

import './liveStatus.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'wheat'
  },
  progressBarPosition: {
    position: 'relative',
    left: '30px',
    width: '20vw'
  },
  timeInfoContainer: {
    justifyContent: 'center'
  },
  timeInfo: {
    padding: theme.spacing(3, 2),
    textAlign: 'center'
  }
}));

function LiveStatus({
  // Stats Values
  moodValue,
  sleepValue,
  healthValue,
  purityValue,
  hungerValue,
  arousalValue,

  //Time Values
  currentYear,
  currentMonth,
  currentDay,
  currentHour,
  currentMinutes
}) {
  const classes = useStyles();

  const moodIcon =
    moodValue < 25 ? (
      <SentimentVeryDissatisfied />
    ) : moodValue < 50 ? (
      <SentimentDissatisfied />
    ) : moodValue < 75 ? (
      <SentimentSatisfied />
    ) : (
      <SentimentVerySatisfied />
    );

  return (
    <List className={classes.root}>
      <ListItem className={classes.timeInfoContainer}>
        <Paper className={classes.timeInfo}>
          <Typography variant='h5' component='h3'>
            {`${currentDay} / ${currentMonth} / ${currentYear}`}
            <br />
            {`${String(currentHour).padStart(2, '0')} : ${String(
              currentMinutes
            ).padStart(2, '0')}`}
          </Typography>
        </Paper>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalHospital />
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
          <Avatar>
            <OfflineBolt />
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
          <Avatar>{moodIcon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary='Mood' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={moodValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>{/* <ImageIcon /> */}</Avatar>
        </ListItemAvatar>
        <ListItemText primary='Purity' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={purityValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>{/* <WorkIcon /> */}</Avatar>
        </ListItemAvatar>
        <ListItemText primary='Hunger' />
        <Container className={classes.progressBarPosition}>
          <ProgressBar value={hungerValue} />
        </Container>
      </ListItem>
      <Divider variant='middle' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>{/* <BeachAccessIcon /> */}</Avatar>
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
  purityValue: state.liveStats.purity,
  hungerValue: state.liveStats.hunger,
  arousalValue: state.liveStats.arousal,

  // Time Values
  currentYear: state.timeInfo.currentYear,
  currentMonth: state.timeInfo.currentMonth,
  currentDay: state.timeInfo.currentDay,
  currentHour: state.timeInfo.currentHour,
  currentMinutes: state.timeInfo.currentMinutes
});

export default connect(mapStateToProps)(LiveStatus);
