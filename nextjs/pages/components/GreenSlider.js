import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 800,
    },
    slider: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(6),
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
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 11,
        label: '11',
    },
    {
        value: 12,
        label: '12',
    },
    {
        value: 13,
        label: '13',
    },
    {
        value: 14,
        label: '14',
    },
    {
        value: 15,
        label: '15',
    },
    {
        value: 16,
        label: '16',
    },
    {
        value: 17,
        label: '17',
    },
    {
        value: 18,
        label: '18',
    },
  ];

function valuetext(value) {
  return `${value}°C`;
}

export default function GreenSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.handicap} id="discrete-slider" gutterBottom>
        How many greens did you hit in regulation?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={0}
        max={18}
        track={false}
        className={classes.slider}
      />
    </div>
  );
}