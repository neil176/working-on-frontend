import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer'
}


const NavBar = (props) => {
  	let content = null;
  	let homeUrl = "/"

  	if (props.user) {
  		homeUrl = `/users/${props.user.id}`
  	} 

	if (props.isLoggedIn) {
		content = (
			<div className="navbar">
				<NavLink
				    to={homeUrl}
				    exact
				    style={link}
				    activeStyle={{
				        background: 'darkblue'
				    }}
				>Home</NavLink>
				<NavLink
	      			to="/feed"
	      			exact
	      			style={link}
	      			activeStyle={{
	        			background: 'darkblue'
	      			}}
	    		>Feed</NavLink>
	    		<NavLink
	      			to="/search"
	      			exact
	      			style={link}
	      			activeStyle={{
	        			background: 'darkblue'
	      			}}
	    		>Search</NavLink>
	    		<NavLink
	      			to="/login"
	      			exact
	      			style={link}
	      			onClick={props.logOutUser}
	      			activeStyle={{
	        			background: 'darkblue'
	      			}}
	    		>Logout</NavLink>
	    	</div>
		);
	} else {
		content = (
			<div>
				<NavLink
			    	to="/login"
			    	exact
			    	style={link}
			      	activeStyle={{
			        	background: 'darkblue'
			      	}}
			    >Login</NavLink>
			    <NavLink
			      	to="/signup"
			      	exact
			      	style={link}
			      	activeStyle={{
			        	background: 'darkblue'
			      	}}
			    >Sign Up</NavLink>
		    </div>
		);
	}

  return (content);

}

export default NavBar;
