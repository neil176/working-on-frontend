import React from 'react';

// import { NavLink } from 'react-router-dom';

import ItemsListItem from './ItemsListItem.js';

const ResultsListItem = (props) => {

	let items = props.project.items.map((item) => {
		return <div className="core-item inline"><ItemsListItem item={item} /></div>;
	})

	// const projectPath = `/users/${props.project.user_id}/projects/${props.project.id}`

	
	console.log(props)

	const handleFollow = () => {
		props.follow(props.project.user.id)
	}

	return (
		<div className="project-list-item results-list-item feed-list-item">
			<h2>{props.project.title}</h2>
			<h3>{props.project.user.username}</h3>
			<button float="right" onClick={handleFollow}>Follow!</button><br/>
			<br />
			{items}
		</div>
	);
	// removed 		<NavLink to={projectPath} exact>{props.project.title}</NavLink>
	
}


export default ResultsListItem;