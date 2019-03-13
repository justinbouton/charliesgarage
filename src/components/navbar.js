import React, { Component } from 'react'
import { Menu, Button, Segment, Icon, MenuItem } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
// import logo from '../logo.svg';
// import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

{/* <Segment inverted>
    <Menu fixed='top' inverted>
      <Menu.Item as={Link} to='/'> <Icon name='home' />Home</Menu.Item>
      <Menu.Item active> <Icon name='user' />About</Menu.Item>
      <Menu.Item active> <Icon name='info' />Contact</Menu.Item>


      <Menu.Item position='right'>
        <Button primary as={Link} to='signup' style={{ marginLeft: '0.5em' }} >Sign up</Button>
      </Menu.Item>

      <Menu.Item>
        <Button as={Link} to='login'>Log-in</Button>
      </Menu.Item>
    </Menu>
  </Segment> */}


                <header>
                    `<div>
                        {loggedIn ? (
                            <Menu fixed='top' inverted>
                                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                                <Menu.Item as={Link} to='about'>About</Menu.Item>
                                <Menu.Item as={Link} to='contact'>Contact</Menu.Item>
                                <Menu.Item position='right' to="#" onClick={this.logout}>logout</Menu.Item>
                            </Menu>
                        ) : (
                            <Menu fixed='top' inverted>
                                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                                <Menu.Item as={Link} to='about'>About</Menu.Item>
                                <Menu.Item as={Link} to='contact'>Contact</Menu.Item>
                                <Menu.Item position='right' as={Link} to="/login">login</Menu.Item>
                                <Menu.Item as={Link} to="/signup">sign up</Menu.Item>
                            </Menu>
                            )}
                    </div>`
                    {/* <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div> 
                        <img src={logo} className="App-logo" alt="logo" /> 
                        <h1 className="App-title">MERN Passport</h1> 
                        </div>
                    */}
                </header>
            </div>

        );

    }
}

export default Navbar