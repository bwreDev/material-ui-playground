import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

export class Success extends Component {
	render() {
		return (
			<>
				<AppBar title='Success' />
				<h1>Your submission was successful!</h1>
				<p>We will email you with further details.</p>
			</>
		);
	}
}

export default Success;
