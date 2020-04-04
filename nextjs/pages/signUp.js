import React , { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HandicapSlider from './components/HandicapSlider';


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

export default function signUp(){

    const classes = useStyles();

    const [ data, setData ] = useState();

      useEffect(() => {

        fetch('/api/user', {
          method: 'get'
        })
        .then( r => r.json() )
        .then( data => {
          setData(data[0].first_name);
        });
      
      }, []);
    

    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth='sm'>
                <Typography>
                    {JSON.stringify(data)}
                </Typography>
                <Paper >
                <div className={classes.root}>
                <Grid container spacing={3}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />  
                    </Grid>
                    <Grid>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />  
                    </Grid>
                    <Grid>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />  
                    </Grid>
                    <Grid>
                        <TextField variant="outlined" id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>  
                    </Grid>
                    <Grid>
                        <HandicapSlider />  
                    </Grid>
                    <Grid>
                        <Button variant="contained" color='primary' href='/signIn'>Submit</Button>
                    </Grid>
                </form>
                </Grid>
                </div>
                </Paper>
            </Container>
        </ThemeProvider>
    )
}
