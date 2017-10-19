import React from 'react';
import { withRouter } from 'react-router';



import Profile from '../components/Profile.js';
import Filter from '../components/Filter.js';
import ProjectList from '../components/ProjectList.js';
import NewProjectForm from '../components/NewProjectForm.js';




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

	

	createProject = (newProjectParams) => {

		fetch("http://localhost:3000/projects", {
			method: 'post',
			body: JSON.stringify(newProjectParams),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
	    })
	    .then((response) => {
	      	return response.json()
	    })
	    .then((respJSON) => {
	      	this.props.history.push(`/users/${respJSON.user.id}/projects/${respJSON.id}`);
	    })
	}


	render() {

// projects will need to be replaced by a filtered form of the list
		return (
			<div className="home-container wrapper" >
				<NewProjectForm user={this.props.user} createProject={this.createProject}/>
				<Profile user={this.props.user} />
				<Filter filterList={this.filterProjectList} />
				<ProjectList projects={this.state.projects} />
			</div>
		);
	}


}


export default withRouter(HomeContainer);