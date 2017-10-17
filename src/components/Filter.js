
import React from 'react';


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
			<form>
				<input type="text" placeholder="filter here" onChange={this.handleChange} value={this.state.currentFilter} />
			</form>
		);
	}
}


export default Filter;