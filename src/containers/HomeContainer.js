import React from 'react';

import Profile from '../components/Profile.js';
import Filter from '../components/Filter.js';
import ProjectList from '../components/ProjectList.js';



// home here refers to the user's main page showing profile
// and providing a list of that user's projects


// component must receive as props:
// 


class HomeContainer extends React.Component {
	constructor() {
		super();

		this.state = {}
	}

	componentDidMount() {
// fetch info? or does that happen in app?

	}

	filterProjectList() {
// should this be here or in the list before it renders?

	}


	render() {

		return (
			<div>
				<Profile />
				<Filter />
				<ProjectList />
			</div>
		);
	}


}


export default HomeContainer;