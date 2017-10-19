import React from 'react';

const CurrentItem = (props) => {


	if (props.item) {
		return (
			<div className="current-item">
				current item here <br /> {props.item.description}
			</div>
		);
	} else {
		return (
			<div className="current-item">
			there is no current item
			</div>
		);
	}
	
}

export default CurrentItem;