import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <form
          className='personalDetails'
          noValidate
          autoComplete='off'
        >
          <TextField
            id='occupation'
            label='Occupation'
            variant='outlined'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            id='city'
            label='City'
            variant='outlined'
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            id='bio'
            label='Bio'
            variant='outlined'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
        </form>
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

export default FormPersonalDetails;
