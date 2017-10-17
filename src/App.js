import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';

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

      //fetch is ansync
      //setState is also async could this cause a problem?
      // look into the second argument setState takes

      this.props.history.push(`/users/${respJSON.user.id}`)
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
      this.props.history.push(`/users/${respJSON.user.id}`)
    })
  }

  componentDidMount() {
    this.fetchUserInfo()
  }



// may need to add a HOC to redirect according to !!isLoggedIn ?

  render() {

    return (
      <div className="top-wrapper">
        <NavBar logOutUser={this.logOutUser} isLoggedIn={this.state.isLoggedIn} />
        <LandingContainer signUpUser={this.signUpUser} logInUser={this.logInUser} />
        <Switch>
          <Route exact path="/" render={() => <LandingContainer signUpUser={this.signUpUser} logInUser={this.logInUser} />} />
          <Route path="/users/:id/projects/:id" render={() => <ProjectContainer user={this.state.user} /> } />
          <Route path="/users/:id" render={() => <HomeContainer user={this.state.user} />} />
        </Switch>          
      </div>
    );
  }
}

export default withRouter(App);
