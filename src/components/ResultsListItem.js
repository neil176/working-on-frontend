import React from 'react';

import { NavLink } from 'react-router-dom';

import ItemsListItem from './ItemsListItem.js';

const ResultsListItem = (props) => {

	let items = props.project.items.map((item) => {
		return <ItemsListItem item={item} />;
	})

	const projectPath = `/users/${props.project.user_id}/projects/${props.project.id}`

	
	console.log(props)

	const handleFollow = () => {
		props.follow(props.project.user.id)
	}

	return (
		<div className="project-list-item feed-list-item">
			<h3>{props.project.user.username}</h3>
			<button onClick={handleFollow}>Follow!</button>
			<NavLink to={projectPath} exact>{props.project.title}</NavLink>
			<br />
			{items}
		</div>
	);
}


export default ResultsListItem;