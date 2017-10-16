import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import { Grid } from 'semantic-ui-react'


import NavBar from './components/NavBar.js';
import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';
import LandingContainer from './containers/LandingContainer.js';
import HomeContainer from './containers/HomeContainer.js';
import ProjectContainer from './containers/ProjectContainer.js';





class App extends Component {

  constructor(){
    super()

    this.state = {
      user: null,
      isLoggedIn: false
    }
  }

  logInUser = (logInParams) => {
    fetch("http://localhost:3000/login", {
      method: 'post',
      body: JSON.stringify(logInParams),
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
      localStorage.setItem('jwtToken', respJSON.jwt)
      this.setState({
        user: respJSON.user,
        isLoggedIn: true
      })
    })
  }

  fetchUserInfo() {
    if (localStorage.getItem('jwtToken')) {
      return fetch("http://localhost:3000/currentuser", { // change route as needed
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
        if (respJSON.id) {
          this.setState({
            isLoggedIn: true,
            user: respJSON
          })
        } else {
          // redirect to login or something
        }

      })
    } else {
      console.log("no jwtToken found in localStorage")
    }
  }

  

  logOutUser = () => {
    localStorage.removeItem("jwtToken");
    this.setState({
      user: null,
      isLoggedIn: false
    })

  }

  signUpUser = (signUpParams) => {
    fetch("http://localhost:3000/users", {
      method: 'post',
      body: JSON.stringify(signUpParams),
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
      localStorage.setItem('jwtToken', respJSON.jwt)
      this.setState({
        user: respJSON.user,
        isLoggedIn: true
      })
    })
  }

  componentDidMount() {
    this.fetchUserInfo()
  }



// will need to add a HOC to redirect according to !!isLoggedIn

  render() {


// resolve this with a HOC
//---------------------------------------
    // let home = null;
    // if (this.state.isLoggedIn) {
    //   home = <HomeContainer />
    // } else {
    //   home = <LandingContainer />
    // }


// THIS IS THE NON LOGGED IN component with props for: "/"
    // removed from return!
    // <Route path="/" render={() => <LandingContainer signUpUser={this.signUpUser} logInUser={this.logInUser} />} />

    return (
      // restructure grid design so that this stops breaking
      
      <Grid columns={2} divided>
        <Grid.Row>
          <NavBar logOutUser={this.logOutUser} isLoggedIn={this.state.isLoggedIn} />
        </Grid.Row>
          <Route path="/" render={() => {
            if (this.state.isLoggedIn) {
              return <HomeContainer />;
            } else {
              return <LandingContainer signUpUser={this.signUpUser} logInUser={this.logInUser} />              
            }
          }} />

          

          
      </Grid>
    );
  }
}

export default App;
