import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import 'semantic-ui-css/semantic.min.css';
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import WorkOrder from "./components/workOrder";
import CardHolders from "./components/about";
// import AboutUs from "./pages/About"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username} />
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/work-order"
          render={() =>
            <WorkOrder />
          }
        />
        <Route
          path="/about"
          render={() =>
            <CardHolders />
          }
        />


      </div>
    );
  }
}

export default App;
