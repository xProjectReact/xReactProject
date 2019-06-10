import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     height: '8px'
//   }
// });

export default function ProgressBar({ value }) {
  // const classes = useStyles();

  return (
    <LinearProgress
      color='secondary'
      variant='determinate'
      value={value}
      style={{ height: '8px' }}
    />
  );
}
