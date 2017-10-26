import React from 'react';

const FeedListItem = (props) => {

	// const arrowUrl = "https://i.pinimg.com/originals/52/0a/d9/520ad9c57901ea2a4f1448b9d18444ec.png";
	// const arrowUrl = "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-arrows/006749-3d-transparent-glass-icon-arrows-arrow11-right.png";
	const arrowUrl = "http://www.identitycontrol.com/images/default-source/ic/arrow_right3.png";
	

	let coreItems = props.project.items.filter((item) => {
		return item.core;
	})

// the project only has one core item -> it has just been started
	if (coreItems.length === 1) {
		let onlyCoreItem = coreItems[0]
		
		return (
			<div className="feed-list-item">
				<h3>{props.project.user.username} started working on {props.project.title}</h3>
				<br />
				<img src={onlyCoreItem.image} alt="" className="feed-image" />
				<br />
				{props.project.updated_at}
				<br />
				

			</div>
		);

// the project has at least 2 core items -> display its most recent two to show progress
	} else if (coreItems.length > 1) {
		let penultimateCoreItem = coreItems.slice(-2)[0]
		let lastCoreItem = coreItems.slice(-2)[0]

		return (
			<div className="feed-list-item">
				<h3>{props.project.user.username} made progress on {props.project.title}</h3>
				<br />
				<img src={penultimateCoreItem.image} alt="" className="feed-image" />
				<img src={arrowUrl} alt="" className="feed-image" />

				<img src={lastCoreItem.image} alt="" className="feed-image" />
				<br />
				{props.project.updated_at}
				<br />
				

			</div>
		);

// the project does not have any core items -> it is not worth displaying
	} else {
		return null;
	}

}

export default FeedListItem;