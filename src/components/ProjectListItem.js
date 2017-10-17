import React from 'react';

const ProjectListItem = (props) => {

// items here referring to the image/text objects that a project has_many of
	let items = props.project.items.map((item) => {
		return (
			<li key={item.id}>
				{item.description}<br />
				<img src={item.image} alt="TINY RICK" height="100" width="100"/>			
			</li>
		);
	})

	const baseUrl = "localhost:3001/users"
	const projectUrl = `${baseUrl}/${props.project.user_id}/projects/${props.project.id}`


	return (
		<div>
			<li> <a href={projectUrl} >{props.project.title}</a>
				<ul>{items}</ul>
			</li>
			<br />
			_____________________________________

			<br />
			<br />

		</div>
	);
}

export default ProjectListItem;