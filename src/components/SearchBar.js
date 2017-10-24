import React from 'react';


class SearchBar extends React.Component {

	constructor() {
		super();
		this.state = {
			query: ""
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.search(this.state.query);
		this.setState({
			query: ""
		})
	}

	handleQueryChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}


	render() {
		return (
			<div>
				SearchBar
				<form onSubmit={this.handleSubmit} >
					<input onChange={this.handleQueryChange} type="text" value={this.state.query} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default SearchBar;