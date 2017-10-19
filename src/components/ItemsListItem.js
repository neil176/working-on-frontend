import React from 'react';

const ItemsListItem = (props) => {

	return (
		<span>
			<figure>
			
			<img src={props.item.image} height="100" width="100" />
			<figcaption>{props.item.description}</figcaption>
			</figure>
		</span>
	);
}

export default ItemsListItem;