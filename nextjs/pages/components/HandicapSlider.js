import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
    },
    slider: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    handicap: {
        marginLeft: theme.spacing(1.5),
        marginTop: theme.spacing(2),
    },
  }));

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: -8,
      label: '-8',
    },
  ];

function valuetext(value) {
  return `${value}°C`;
}

export default function HandicapSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.handicap} id="discrete-slider" gutterBottom>
        Handicap
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={-8}
        max={30}
        track={false}
        className={classes.slider}
      />
    </div>
  );
}
