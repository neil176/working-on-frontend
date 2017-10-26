import React from 'react';
import { Form } from 'semantic-ui-react';


class SignUp extends React.Component {

	constructor(){
		super();

		this.state = {
			username: "",
			password: "",
			password_confirm: "",
			email: ""
		}
	}


	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	handlePasswordConfirmationChange = (event) => {
		this.setState({
			password_confirm: event.target.value
		})
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}



	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.props)
		this.props.signUpUser({
			username: this.state.username,
			password: this.state.password,
			email: this.state.email
		})
		this.setState({
			username: "",
			password: "",
			password_confirm: "",
			email: ""
		})

	}

	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
				<label>Password</label>
				<input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
		
				<label>Password Confirmation</label>
				<input type="password" onChange={this.handlePasswordConfirmationChange} value={this.state.password_confirm}/>
				<label>Email</label>
				<input type="text" onChange={this.handleEmailChange} value={this.state.email}/>
				
				<input type="submit"/>
			</form>
			</div>
		);
	}
}

export default SignUp
