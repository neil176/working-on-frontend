import React from 'react'

const ProjectInfo = (props) => {


	if (props.project) {
		return (
			<div>
				<h2>{props.project.title}</h2>
				Tags: 
				<ul>{props.project.tags.map((tag) => <li>{tag.text} at id: {tag.id} </li>)}</ul>
			</div>
		);
	} else {
		return (
			<div>
				not yet loaded
			</div>
		)
	}
	
}

export default ProjectInfo;