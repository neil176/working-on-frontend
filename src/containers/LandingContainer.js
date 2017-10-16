import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';

import { Grid } from 'semantic-ui-react'


import LogIn from '../components/LogIn.js';
import SignUp from '../components/SignUp.js';

import LogInButton from '../components/LogInButton.js';
import SignUpButton from '../components/SignUpButton.js';

class LandingContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			LoggingIn: false,
			SigningUp: false
		}
	}

	

	render() {

// will need to make sure receiving callbacks to pass into LogIn and SignUp

		return (
				<Grid.Row>
					<Grid.Column>
						<Switch>
							<Route path="/login" render={() => <LogIn logInUser={this.props.logInUser} />} />
							<Route path="/" component={LogInButton} />
		        		</Switch>
		        	</Grid.Column>
		        	<Grid.Column>
			        	<Switch>
				        	<Route path="/signup" render={() => <LogIn logInUser={this.props.signUpUser} />} /> 
				        	<Route path="/" component={SignUpButton} />
						</Switch>
					</Grid.Column>
				</Grid.Row>
		);
	}
}



export default LandingContainer