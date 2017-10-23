import React from 'react';

import FeedListItem from './FeedListItem.js';

const FeedList = (props) => {

	// receives list of projects

	let listItems = props.projects.map((project) => {
		return <FeedListItem project={project} />
	})

	return (
		<div className="feed-list">
			{listItems}
		</div>
	);
}

export default FeedList;