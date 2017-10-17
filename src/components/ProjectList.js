import React from 'react';

import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => {
	// should receive FILTERED list of projects
	

	// each item should have an onClick to redirect to that project's page
	let projectListItems = props.projects.map((project) => {
		return <ProjectListItem key={project.title} project={project} />
	})

	return (
		<div>
			<h2>this is the ProjectList component</h2>
			<ul>{projectListItems}</ul>
		</div>
	);
}

export default ProjectList;