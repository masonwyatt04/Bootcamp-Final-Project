import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SideNavbar from './components/SideNavbar';
import DashboardBar from './components/DashboardBar';
import { OffTheTeeCard, ApproachCard, AroundTheGreenCard, PuttingCard } from './components/DashboardCard';

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
              <DashboardBar />
          </Grid>
          <Grid item xs={3}>
              <OffTheTeeCard />
          </Grid>
          <Grid item xs={3}>
              <ApproachCard />
          </Grid> 
          <Grid item xs={3}>
              <AroundTheGreenCard />
          </Grid>
          <Grid item xs={3}>
              <PuttingCard />
          </Grid>
      </Grid>  
      </Grid>

    </Grid>
  </div>
  </>
)

}