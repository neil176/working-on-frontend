import React from 'react';

import ItemsListItem from './ItemsListItem.js';

const ItemsList = (props) => {

	const listItems = props.items.map((item) => {
		return <div><ItemsListItem item={item}/></div>
	})

	return (
		<div className="items-list scrollable">
		ItemsList
		{listItems}
		
		</div>
	);
}

export default ItemsList;
