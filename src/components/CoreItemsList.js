import React from 'react';

import CoreItemsListItem from './CoreItemsListItem.js';
import ItemsListItem from './ItemsListItem.js';

const CoreItemsList = (props) => {

	// const listItems = props.items.map((item) => {
	// 	return <CoreItemsListItem item={item}/>
	// })

	const listItems = props.items.map((item) => {
		return <ItemsListItem item={item}/>
	})

	return (
		<div className="core-items-list scrollable">
		CoreItemsList
		<span>{listItems} </span>
		</div>
	);
}

export default CoreItemsList
