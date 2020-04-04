import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';

  export default function profileComponent() {
  
    return (
      <Container maxWidth='lg'>
          <Typography>
              Profile Information
          </Typography>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography>
                <PersonIcon />
                First Name Placeholder
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                <PersonIcon />
                Last Name Placeholder
                </Typography>     
              </Grid>
              <Grid item xs={12}>
                <Typography>
                <MailOutlineIcon />
                Email Placeholder
                </Typography>     
              </Grid>
              <Grid item xs={12}>
                <Typography>
                <SportsGolfIcon />
                Handicap Placeholder
                </Typography>     
              </Grid>

          </Grid>
      </Container>

    );
  }