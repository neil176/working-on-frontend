import React from 'react'

import ResultsListItem from './ResultsListItem';



const ResultsList = (props) => {

	let projectsList = null
	console.log(props)
	if (props.projects) {
		projectsList = props.projects.map((project) => {
			return <ResultsListItem project={project} follow={props.follow} />
		})		
	}

	return (
		<div className="results-list"> 
		Results list
		{projectsList}
		</div>
	)
}


export default ResultsList;