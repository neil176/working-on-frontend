import React from 'react';

import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => {
	// should receive FILTERED list of projects
	
	// each item should have an onClick to redirect to that project's page
	let projectListItems = props.projects.map((project) => {
		return <ProjectListItem key={project.title} project={project} />
	})

	return (
		<div className="project-list scrollable">
			<h2>this is the ProjectList component</h2>
			{projectListItems}
		</div>
	);
}

export default ProjectList;