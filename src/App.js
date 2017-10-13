import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import NavBar from './components/NavBar.js'
import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';



const home = () => {
  return (
    <p>this is the home route "/"</p>
  )
}


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



  render() {
    return (
      <div>
          <NavBar logOutUser={this.logOutUser} isLoggedIn={this.state.isLoggedIn} />
          <Route path="/" component={home} />
          <Route path="/login" render={() => <LogIn logInUser={this.logInUser} />} />
          <Route path="/signup" component={SignUp} /> 

      </div>
    );
  }
}

export default App;
