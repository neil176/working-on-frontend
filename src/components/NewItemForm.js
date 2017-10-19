import React from 'react';

class NewItemForm extends React.Component {

	// recieves as prop addItem callback, which accepts newItemParams
	constructor() {
		super();
		this.state = {
			description: "",
			imageUrl: ""
		}
	}


	handleSubmit = (event) => {
		event.preventDefault();
		// debugger
		console.log(this)
		this.props.addItem({
			description: this.state.description,
			image: this.state.imageUrl,
			project_id: this.props.projectId
		})


		this.setState({
			description: "",
			imageUrl: ""
		})
	}

	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value
		})
	}

	handleImgUrlChange = (event) =>{
		this.setState({
			imageUrl: event.target.value
		})
	}

	render() {
		return (
			<div className="button-block">
				this is the new item form
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleDescriptionChange} placeholder="description" value={this.state.description}/>
					<input type="text" onChange={this.handleImgUrlChange} placeholder="image url" value={this.state.imageUrl}/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default NewItemForm;