import React from 'react';

import ItemsList from '../components/ItemsList.js';
import CoreItemsList from '../components/CoreItemsList.js';
import NewItemForm from '../components/NewItemForm.js';
import CurrentItem from '../components/CurrentItem.js';




// project container will be the main container for a single project view

// subcomponents:
		// currentItem -- this may not need to be ts own component
		// buttonBlock -- this may not need to be itwon component, but should replace itself with form for item creation i think? 
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
			project: null,
			currentItem: null
		};
	}


	addItem = (newItemParams) => {
		fetch("http://localhost:3000/items", {
			method: 'post',
			body: JSON.stringify(newItemParams),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
	    })
	    .then((response) => {
	      	return response.json()
	    })
	    .then((respJSON) => {

	      	console.log(respJSON)
	      
	      	this.setState({
	       		project: respJSON
	      	})
	    })
	}

	fetchProject() {
		fetch(`http://localhost:3000/projects/${window.location.href.split("/").pop()}`, { // change route as needed
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('jwtToken')
        }
      })
      .then((resp) => {
        return resp.json();
      })
      .then((respJSON) => {
        console.log(respJSON)
        this.setState({
        	project: respJSON
        })
      })
	}

	componentDidMount() {
		this.fetchProject()
	}

	changeCurrentItem = (event) => {
		console.log(event.target)
	}



// should distingush between core and non-core items before passing down, not passing entire project
	render() {
		if (this.state.project) {
			const coreItems = this.state.project.items.filter((item) =>{
				return item.core
			})
			const otherItems = this.state.project.items.filter((item) =>{
				return !item.core
			})

			return (
				<div className="home-container wrapper">
					<CurrentItem item={this.state.currentItem || null} />
					<NewItemForm addItem={this.addItem} projectId={this.state.project.id}/>
					<CoreItemsList changeCurrentItem={this.changeCurrentItem} items={coreItems} />
					<ItemsList changeCurrentItem={this.changeCurrentItem} items={otherItems} />
				</div>
			);
		} else {
			return null;
		}
		


		
	}
}

export default ProjectContainer;