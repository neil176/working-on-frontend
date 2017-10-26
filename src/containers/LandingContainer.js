import React from 'react'
import { Route } from 'react-router-dom';

import LogIn from '../components/LogIn.js';
import SignUp from '../components/SignUp.js';

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
			<div className="home-container" >
				
    			<Route path="/login" render={() => <LogIn logInUser={this.props.logInUser} />} />
	        	<Route path="/signup" render={() => <SignUp signUpUser={this.props.signUpUser} />} /> 
	        	

			</div>
		);
	}
}



export default LandingContainer