import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export function OffTheTeeCard(){

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              STROKES GAINED OFF THE TEE
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Off The Tee Stats</Button>
          </CardActions>
        </Card>
      );
}

export function ApproachCard(){

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              STROKES GAINED APPROACHING THE GREEN
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Approach Stats</Button>
          </CardActions>
        </Card>
      );
}

export function AroundTheGreenCard(){

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              STROKES GAINED AROUND THE GREEN
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Around The Green Stats</Button>
          </CardActions>
        </Card>
      );
}

export function PuttingCard(){

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              STROKES GAINED PUTTING
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Putting Stats</Button>
          </CardActions>
        </Card>
      );
}