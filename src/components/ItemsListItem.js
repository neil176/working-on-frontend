import React from 'react';

const ItemsListItem = (props) => {

	return (
		<div className="item">
			<figure>
				<img src={props.item.image} height="100" width="100" />
				<figcaption>{props.item.description}</figcaption>
			</figure>
		</div>
	);
}

export default ItemsListItem;