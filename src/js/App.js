import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from '../js/Profile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        <Grid item xs={11} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={11} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={11} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={11} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={11} sm={4}>
          <Profile />
        </Grid>
      </Grid>
    </div>
  );
}
