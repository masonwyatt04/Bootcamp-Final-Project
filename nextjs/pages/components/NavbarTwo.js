import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import GolfCourse from '@material-ui/icons/GolfCourse';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PersonOutline from '@material-ui/icons/PersonOutline';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    golfButton: {
      marginRight: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    aboutUsLink:{
      marginLeft: theme.spacing(2),
    },
    pricingLink:{
      marginLeft: theme.spacing(2),
    },
    signInButton:{
      marginLeft: theme.spacing(2),
    },
    personOutline:{
      marginRight: theme.spacing(1),
    },
    products:{
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
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

export default function NavbarTwo(){

  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <ThemeProvider theme={theme}>
            <div className={classes.root}> 
      <AppBar position="static">
        <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.golfButton}
            color="secondary"
            aria-label="open drawer"
            href='/'
          >
            <GolfCourse />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap color="secondary">
            Golf Stat App
          </Typography>
          <Typography className={classes.aboutUsLink}>
          <Link href="/about" color='secondary'>
            About Us
          </Link>
          </Typography>
          <Typography className={classes.pricingLink}>
          <Link href="/pricing" color='secondary'>
            Pricing and Details
          </Link>
          </Typography>
          <Typography className={classes.products}>
          <Link href="/products" color='secondary'>
            Products
          </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color='secondary'/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button variant="contained" className={classes.signInButton} color='secondary' href='/signIn'>
            <PersonOutline className={classes.personOutline} color='primary'/>
            Sign-In
          </Button>
        </Toolbar>
        </Container>

      </AppBar>
    </div>
    </ThemeProvider>

  );
}