import React from 'react';

class NewProjectForm extends React.Component {

	constructor() {
		super();
		this.state ={
			title: ""
		}
	}

	handleTitleChange = (event) => {
		this.setState({
			title: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createProject({
			user_id: this.props.user.id,
			title: this.state.title
		}); 
	}

	render() {

		return (
			<div className="new-project-button">
				<form onSubmit={this.handleSubmit}>
					<label>Start a new Project!</label>
					<input onChange={this.handleTitleChange} type="text" placeholder="title" value={this.state.title} />
					<input type="submit" />
				</form>
			</div>
		);
	}

}


export default NewProjectForm;