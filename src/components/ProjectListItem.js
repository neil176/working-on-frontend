import React from 'react';

const ProjectListItem = (props) => {
	// should receive props just for individual project
	// with its items


// items here referring to the image/text objects that a project has_many of
	let items = props.project.items.map((item) => {
		return (<li key={item.id}>
			{item.description}
			<img src={item.image} alt="TINY RICK" height="100" width="100"/>			
		</li>);
	})
	

	return (
		<li>{props.project.title}
			<ul>{items}</ul>
		</li>
	);
}

export default ProjectListItem;