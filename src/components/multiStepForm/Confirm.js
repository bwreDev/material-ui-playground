import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
	continue = e => {
		e.preventDefault();
		// Process Form here when connected to backend//
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {
			values: { firstName, lastName, email, occupation, city, bio },
		} = this.props;
		return (
			<>
				<AppBar title='Confirm User Data' />
				<List>
					<ListItem primaryText='First Name' secondaryText={firstName} />
					<ListItem primaryText='Last Name' secondaryText={lastName} />
					<ListItem primaryText='Email' secondaryText={email} />
					<ListItem primaryText='Occupation' secondaryText={occupation} />
					<ListItem primaryText='City' secondaryText={city} />
					<ListItem primaryText='Bio' secondaryText={bio} />
				</List>
				<br />
				<Button
					label='Confirm & Continue'
					variant='contained'
					primary={true}
					onClick={this.continue}
				/>
				<br />
				<Button
					label='Back'
					variant='contained'
					primary={false}
					onClick={this.back}
				/>
			</>
		);
	}
}

export default Confirm;
