import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SideNavbar from './components/SideNavbar';
import AddBar from './components/AddBar';
import AddRoundForm from './components/AddRoundForm';
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

export default function Profile(){

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
              <AddBar />
          </Grid>
          <Grid item xs={10}>
            <AddRoundForm />
          </Grid>
      </Grid>  
      </Grid>

    </Grid>
  </div>
  </>
)
}
