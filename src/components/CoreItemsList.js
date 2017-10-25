import React from 'react';

import CoreItemsListItem from './CoreItemsListItem.js';
import ItemsListItem from './ItemsListItem.js';

const CoreItemsList = (props) => {

	// const listItems = props.items.map((item) => {
	// 	return <CoreItemsListItem item={item}/>
	// })

	const listItems = props.items.map((item) => {
		return <ItemsListItem changeCurrentItem={props.changeCurrentItem} item={item}/>
	})

	return (
		<div className="core-items-list scrollable-x">
			{listItems}
		</div>
	);
}

export default CoreItemsList
