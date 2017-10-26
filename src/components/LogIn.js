import React from 'react';

class LogIn extends React.Component {

	constructor(){
		super()

		this.state = {
			username: "",
			password: ""
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handlePasswordChange = (event) =>{
		this.setState({
			password: event.target.value
		})
	}


	handleSubmit = (event) => {
		event.preventDefault()
		this.props.logInUser({username: this.state.username, password: this.state.password})
		this.setState({
			username: "",
			password: ""
		})

	}

	render(){
		return (
			<div className="sign-in">
			<form onSubmit={this.handleSubmit}>
			    <br/><label>Username</label>
			    <br/><input type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder='Username' />
			    <br/><label>Password</label>
			    <br/><input type="password" onChange={this.handlePasswordChange} value={this.state.password} placeholder='Password' />
				<br/><input value="Sign In" type="submit" />
			</form>
			</div>
		);
	}
}

export default LogIn
