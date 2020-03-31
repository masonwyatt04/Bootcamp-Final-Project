import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import NavbarTwo from './components/NavbarTwo';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Golf Stat App
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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

export default function Index() {
  return (<>
    <NavbarTwo />
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <center>
        <Typography>
          Welcome to a new way to look at your golf game.
        </Typography>
        <Button variant="contained" color="primary" href='/signUp'>
          Get Started
        </Button>
        </center>
      </Grid>
      </Grid>
      <Copyright />
      </Container>
    </ThemeProvider>
  </>
  );
}
