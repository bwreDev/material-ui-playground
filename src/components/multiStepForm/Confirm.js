import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form here when connected to backend//
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>Confirm Your Details</Typography>
          </Toolbar>
        </AppBar>
        <List component='ul' aria-label='User Data List'>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={firstName}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary='Last Name' secondary={lastName} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary='Email' secondary={email} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary='Occupation'
              secondary={occupation}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary='City' secondary={city} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary='Bio' secondary={bio} />
          </ListItem>
        </List>
        <Button
          label='Continue'
          variant='contained'
          color='primary'
          onClick={this.continue}
        >
          Continue
        </Button>
        <Button
          label='Back'
          variant='contained'
          color='secondary'
          onClick={this.back}
        >
          Back
        </Button>
      </>
    );
  }
}

export default Confirm;
