import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FairwaySlider from './FairwaySlider';
import GreenSlider from './GreenSlider';
import TournamentRoundSwitch from './TournamentRoundSwitch';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      grid: {
        flexGrow: 1,
      },
      udO: {
        marginTop: theme.spacing(20),
      },
      udC: {
        marginTop: theme.spacing(5),
      },
    },
  }));
  

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#00838f',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#FFFFFF',
      },
    },
  });

export default function addRoundForm(){

    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth='md'>
                <Typography>
                    Add a Round
                </Typography>
                <Paper >
                <div className={classes.root}>
                <Grid container spacing={3}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid>
                        <TextField id="outlined-basic" label="Score" variant="outlined" />  
                    </Grid>
                    <Grid item xs={12}>
                        <FairwaySlider />
                    </Grid>
                    <Grid item xs={12}>
                        <GreenSlider />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField id="outlined-basic" className={classes.udC} label="Up and Downs" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="outlined-basic" className={classes.udO} label="Up and Down Chances" variant="outlined" />  
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="outlined-basic" className={classes.udO} label="Putts" variant="outlined" />  
                    </Grid>
                    <Grid item xs={12}>
                        <TournamentRoundSwitch /> 
                    </Grid>
                    <Grid>
                        <Button variant="contained" color='primary' href='/dashboard'>Submit</Button>
                    </Grid>
                </form>
                </Grid>
                </div>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}