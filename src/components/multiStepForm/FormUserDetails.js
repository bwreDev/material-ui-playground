import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<>
				<AppBar title='Enter User Details' />
				<form className='userDetails' noValidate autoComplete='off'>
					<TextField
						id='first-name'
						label='First Name'
						variant='outlined'
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						id='last-name'
						label='Last Name'
						variant='outlined'
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						id='email'
						label='Email'
						variant='outlined'
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>
				</form>
				<Button
					label='Continue'
					variant='contained'
					color='primary'
					onClick={this.continue}>
					Continue
				</Button>
				<Button
					label='Back'
					variant='contained'
					color='secondary'
					onClick={this.back}>
					Back
				</Button>
			</>
		);
	}
}

export default FormUserDetails;
