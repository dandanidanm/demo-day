import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import place from '../../static/place';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function PlaceToVisit() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={place[1]}  />
      <ImageCard place={place[0]}  />
    </div>
  );
}