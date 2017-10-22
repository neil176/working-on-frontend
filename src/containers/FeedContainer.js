import React from 'react';

import FeedList from '../components/FeedList.js';

// sub components:
//		search by tags form
//		feedList
//			feedlistitem
// 		

class FeedContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: null,
			followees: null
		}

	}

	componentDidMount() {
		this.getFollowees();
	}

	getFollowees() {
		fetch("http://localhost:3000/feed", { 
	        method: 'GET',
	        headers: {
	          	"Accept": "application/json",
	          	"Content-Type": "application/json",
	          	"Authorization": localStorage.getItem('jwtToken')
	        }
	    })
	    .then((resp) => {
	        return resp.json();
	    })
	    .then((respJSON) => {
// this is working, giving back array of users who are current user's followees
			console.log(respJSON)
	        this.setState({
	        	followees: respJSON
	        });

	    })
	}




	assembleFeed() {
		let projects = [];

		for (var i = 0; i < this.state.followees.length; i++) {
			projects = [...projects, ...this.state.followees[i].projects]
		}

		function comparator(proj1, proj2) {
			let date1 = new Date(proj1.updated_at);
			let date2 = new Date(proj2.updated_at);
			if (date1 < date2) {
				return -1;
			} else if (date1 > date2) {
				return 1;
			} else {
				return 0;
			}
		}

		let sortedProjects = projects.sort(comparator)

		return sortedProjects;
// more needs to happen, so far we just have an array of projects ordered by most recently updated
	}


	render() {

		if (this.state.followees) {
			this.assembleFeed()
		}
		

		return (
			<div className="wrapper">
				<FeedList />
			</div>
		);
	}


}


export default FeedContainer;