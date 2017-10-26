import React from 'react';

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
			<div className="sign-in">
			<form onSubmit={this.handleSubmit}>
					<label>Username</label>
				<br/><input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
				<br/><label>Password</label>
				<br/><input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
		
				<br/><label>Password Confirmation</label>
				<br/><input type="password" onChange={this.handlePasswordConfirmationChange} value={this.state.password_confirm}/>
				<br/><label>Email</label>
				<br/><input type="text" onChange={this.handleEmailChange} value={this.state.email}/>
				
				<br/><input type="submit"/>
			</form>
			</div>
		);
	}
}

export default SignUp
