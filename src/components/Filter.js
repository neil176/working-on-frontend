import React from 'react';

import '../App.css';



class Filter extends React.Component {

	constructor() {
		super();
		this.state = {
			currentFilter: ""
		}
	}

	handleChange(event) {
		this.setState({
			currentFilter: event.target.value
		})

		this.props.filterList(event.target.value)

		// ----- communicate with ProjectsList
	}





	render() {

		return (
			<div className="filter">
				<form>
					<input type="text" placeholder="filter here" onChange={this.handleChange} value={this.state.currentFilter} />
				</form>
			</div>
		);
	}
}


export default Filter;