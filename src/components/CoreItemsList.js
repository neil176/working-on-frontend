import React from 'react';

import ItemsListItem from './ItemsListItem.js';

const CoreItemsList = (props) => {

	// const listItems = props.items.map((item) => {
	// 	return <CoreItemsListItem item={item}/>
	// })

	const listItems = props.items.map((item) => {
		return <div className="core-item scrollable-x"><ItemsListItem changeCurrentItem={props.changeCurrentItem} item={item}/></div>
	})

	return (
		<div className="core-items-list scrollable-x">
			{listItems}
		</div>
	);
}

export default CoreItemsList
