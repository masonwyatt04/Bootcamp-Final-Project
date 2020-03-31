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


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      grid: {
        flexGrow: 1,
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

export default function signIn(){

    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth='sm'>
                <Typography>
                    Sign-In
                </Typography>
                <Paper >
                <div className={classes.root}>
                <Grid container spacing={3}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />  
                    </Grid>
                    <Grid>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />  
                    </Grid>
                    <Grid>
                        <Button variant="contained" color='primary'>Sign-In</Button>
                    </Grid>
                </form>
                </Grid>
                </div>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}