import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SideNavbar from './components/SideNavbar';
import DashboardBar from './components/DashboardBar';
import StatsCard from './components/StatsCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Dashboard(){

const classes = useStyles();

return(<>
  <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={2}>
      <SideNavbar />
      </Grid>
      <Grid item xs={10}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
              <DashboardBar pagename='Dashboard'/>
          </Grid>
          <Grid item xs={3}>
              <StatsCard statname="Off the Tee Stats" />
          </Grid>
          <Grid item xs={3}>
              <StatsCard statname="Approach Stats" />
          </Grid> 
          <Grid item xs={3}>
              <StatsCard statname="Around the Green Stats"/>
          </Grid>
          <Grid item xs={3}>
              <StatsCard statname="Putting Stats"/>
          </Grid>
      </Grid>  
      </Grid>

    </Grid>
  </div>
  </>
)

}