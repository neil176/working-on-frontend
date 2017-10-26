import React from 'react';

const ItemsListItem = (props) => {

	function handleSelect(event) {
		props.changeCurrentItem(props.item)
	}

	return (
		<div onClick={handleSelect} className="item non-core-item">
			<figure>
				<img src={props.item.image} alt="" />
				<figcaption>{props.item.description}</figcaption>
			</figure>
		</div>
	);
}

export default ItemsListItem;