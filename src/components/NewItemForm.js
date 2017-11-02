import React from 'react';

class NewItemForm extends React.Component {

	// recieves as prop addItem callback, which accepts newItemParams
	constructor() {
		super();
		this.state = {
			description: "",
			imageUrl: "",
			core: false
		}
	}


	handleSubmit = (event) => {
		event.preventDefault();
		// debugger
		console.log(this)
		this.props.addItem({
			description: this.state.description,
			image: this.state.imageUrl,
			core: this.state.core,
			project_id: this.props.projectId
		})


		this.setState({
			description: "",
			imageUrl: "",
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

	handleCoreChange = (event) => {
		console.log(event.target)
		this.setState({
			core: !this.state.core
		})
	}

	render() {
		return (
			<div className="button-block">
				Add an item to your project
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleDescriptionChange} placeholder="description" value={this.state.description}/>
					<br/><input type="text" onChange={this.handleImgUrlChange} placeholder="image url" value={this.state.imageUrl}/>
					<br/><label>Share progress?</label>
					<input type="checkbox" onChange={this.handleCoreChange} value={this.state.core} />
					<br/><input type="submit" />
				</form>
			</div>
		);
	}
}

export default NewItemForm;