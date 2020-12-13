import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Success extends Component {
  render() {
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>Success</Typography>
          </Toolbar>
        </AppBar>
        <h1>Your submission was successful!</h1>
        <p>We will email you with further details.</p>
      </>
    );
  }
}

export default Success;
