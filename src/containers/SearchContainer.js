import React from 'react';

import SearchBar from '../components/SearchBar.js';
import ResultsList from '../components/ResultsList.js';

class SearchContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	search(searchParams) {
		fetch("http://localhost:3000/users", { // fix url and setup counterpart in backend
		    method: 'get',
		    body: JSON.stringify(searchParams),
		    headers: {
	        	"Accept": "application/json",
	        	"Content-Type": "application/json",
	        	"Authorization": localStorage.getItem('jwtToken')
	      	}
	    })
	    .then((response) => {
	      	return response.json()
	    })
	    .then((respJSON) => {
	      	console.log(respJSON)
	      	this.setState({
	        	projects: respJSON
	      	})
	    })
	}

	render() {

		return (
			<div className="wrapper">
				SearchContainer
				<SearchBar search={this.search} />
				<ResultsList projects={this.state.projects} />
			</div>
		);
	}
}

export default SearchContainer;