import React from 'react'

import ProjectListItem from './ProjectListItem';


const ResultsList = (props) => {

	if (props.projects) {
		props.projects.map((project) => {
			<ProjectListItem project={project} resultsList={true} />
		})		
	}

	return (
		<div> 
		Results list
		</div>
	)
}


export default ResultsList;

// this should incorporate the same listItem as the home projectsList