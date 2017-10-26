import React from 'react';

class NewProjectForm extends React.Component {

	constructor() {
		super();
		this.state ={
			title: "",
			tags: ""
		}
	}

	handleTitleChange = (event) => {
		this.setState({
			title: event.target.value
		})
	}

	handleTagsChange = (event) => {
		this.setState({
			tags: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let tagParams = this.state.tags.split(",").map((tagText) => {
				return {text: tagText}
			})
		tagParams.push({text: this.props.user.username});
		this.props.createProject({
			user_id: this.props.user.id,
			title: this.state.title,
			tags: tagParams  // add the username as a tag to all projects
		}); 
	}

	render() {

		return (
			<div className="new-project-button">
				<form onSubmit={this.handleSubmit}>
					<label>Start a new Project!</label><br/>
					<input onChange={this.handleTitleChange} type="text" placeholder="title" value={this.state.title} /><br/>
					<input onChange={this.handleTagsChange} type="text" placeholder="tags" value={this.state.tags} /><br/>
					<input type="submit" />
				</form>
			</div>
		);
	}

}


export default NewProjectForm;