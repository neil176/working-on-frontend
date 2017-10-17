import React from 'react';


import Profile from '../components/Profile.js';
import Filter from '../components/Filter.js';
import ProjectList from '../components/ProjectList.js';



// home here refers to the user's main page showing profile
// and providing a list of that user's projects


// component must receive as props:
// 		user


class HomeContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	componentDidMount() {		
		this.fetchProjects()
	}

	
	fetchProjects = () => {
		fetch("http://localhost:3000/currentuser", {
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
      		this.setState({
      			projects: respJSON.projects
      		})
      	})
	}

	filterProjectList(currentFilter) {
		let filteredProjects = this.state.projects.filter((project) => {
			if (project.title.includes(currentFilter) || project.description.includes(currentFilter)) {
				return true;
			} else {
				return false;
			}
		})

		console.log("filteredProjects", filteredProjects)

		this.setState({
			filteredProjects: filteredProjects
		})
	}


	render() {

// projects will need to be replaced by a filtered form of the list
// new project button needs connecting
		return (
			<div className="home-container wrapper" >

				<button>Start a new project</button>
			
				<Profile user={this.props.user} />
				<Filter filterList={this.filterProjectList} />
				<ProjectList projects={this.state.projects} />
			</div>
		);
	}


}


export default HomeContainer;