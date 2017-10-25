import React from 'react';

const ItemsListItem = (props) => {

	function handleSelect(event) {
		props.changeCurrentItem(props.item)
	}

	return (
		<div onClick={handleSelect} className="item">
			<figure>
				<img src={props.item.image} height="100" width="100" />
				<figcaption>{props.item.description}</figcaption>
			</figure>
		</div>
	);
}

export default ItemsListItem;