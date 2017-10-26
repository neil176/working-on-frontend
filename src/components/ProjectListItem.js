import React from 'react';
import { NavLink } from 'react-router-dom';

import ItemsListItem from './ItemsListItem.js';


const ProjectListItem = (props) => {

// items here referring to the image/text objects that a project has_many of
	let items = props.project.items.map((item) => {
		return <div className="core-item"><ItemsListItem item={item} /></div>;
	})

	const projectPath = `/users/${props.project.user_id}/projects/${props.project.id}`
	return (
		<div className="project-list-item feed-list-item">
			<NavLink className="link" to={projectPath} exact>{props.project.title}</NavLink>
			<br />
			<div className="no-wrap">
			{items}
			
			</div>

			

		</div>
	);
}

export default ProjectListItem;