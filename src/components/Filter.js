
import React from 'react';
import { Form, Input } from 'semantic-ui-react';

class Filter extends React.Component {

	constructor() {
		super();
		this.state = {
			currentFilter: ""
		}
	}

	handleChange() {
		// will probably need to move this state up one level 
		// and pass in change handler callback
		// so that filter can be applied to rendered list
		
		
		// this.setState({
		// 	currentFilter: event.target.value
		// })
		

		// ----- communicate with ProjectsList
	}





	render() {

		return (
			<Form>
				<Input onChange={this.handleChange} value={this.state.currentFilter} />
			</Form>
		);
	}
}


export default Filter;