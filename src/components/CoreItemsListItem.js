import React from 'react';

/// COMBINE ALL "ITEM" COMPONENTS INTO A SINGLE ONE!!!!!!!!
const CoreItemsListItem = (props) => {

	return (
		<p>{props.item.description}</p>
	);
}

export default CoreItemsListItem;