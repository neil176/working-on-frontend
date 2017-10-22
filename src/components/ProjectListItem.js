import React from 'react';
import { NavLink } from 'react-router-dom';

import ItemsListItem from './ItemsListItem.js';


const ProjectListItem = (props) => {

// items here referring to the image/text objects that a project has_many of
	let items = props.project.items.map((item) => {
		// return (
		// 	<li key={item.id}>
		// 		{item.description}<br />
		// 		<img src={item.image} alt="TINY RICK" height="100" width="100"/>			
		// 	</li>
		// );
		return <ItemsListItem item={item} />;
	})

	const projectPath = `/users/${props.project.user_id}/projects/${props.project.id}`

// replace a tag with navlink
	return (
		<div className="project-list-item">
			<NavLink to={projectPath} exact>{props.project.title}</NavLink>
			<br />
			{items}

			

		</div>
	);
}

export default ProjectListItem;