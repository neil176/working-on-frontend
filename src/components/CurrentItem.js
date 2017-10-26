import React from 'react';

const CurrentItem = (props) => {


	if (props.item) {
		return (
			<div className="current-item">
			<br /> {props.item.description}
				<img src={props.item.image} className="current-item-image" alt="" />
			</div>
		);
	} else {
		return (
			<div className="current-item">
			Select an item to view it here
			</div>
		);
	}
	
}

export default CurrentItem;