import React from 'react';


// project container will be the main container for a single project view

// subcomponents:
		// currentItem
		// buttonBlock
		// itemsList
		// 	item
		// coreItemsList
		// 	coreItem


// this container is responsible for:
//		fetching project info ------------- or does it receive as props from app?
// 		making patch requests to update project?
//		making post requests to create new items
//		knowing which item is selected
//		passing the correct item to currentItem to be showcased

class ProjectContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			project: null
		};
	}

	componentDidMount() {
		
	}


	render() {
		return null;
	}
}

export default ProjectContainer;