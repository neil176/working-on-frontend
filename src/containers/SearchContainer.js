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

	search = (query) => {
		fetch(`http://localhost:3000/search?query=${query}`, { 
		    method: 'get',
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

	follow = (id) => {
		fetch("http://localhost:3000/follows", {
      		method: 'post',
      		body: JSON.stringify({
      			follower_id: this.props.user.id,
      			followee_id: id
      		}),
      		headers: {
        		"Accept": "application/json",
        		"Content-Type": "application/json"
      		}
    	})
    	.then((response) => {
      		return response.json()
    	})
    	.then((respJSON) => {
    		debugger
      		console.log(respJSON)
      		
    })
	}



	render() {
		console.log(this.state)
		return (
			<div className="wrapper">
				SearchContainer
				<SearchBar search={this.search} />
				<ResultsList projects={this.state.projects} follow={this.follow} />
			</div>
		);
	}
}

export default SearchContainer;