import React, { Component } from 'react';
import './App.css';
import fire from './content/content';
import Todo from './components/todo';
import Login from './components/login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  
  logout() {
    fire.auth().signOut();
}
  render() {
    return (
     <div>{this.state.user ? <div> <Todo userid={fire.auth().currentUser.uid}/><button onClick={this.logout}>logout</button> </div>: <Login />}</div>);
}
}

 export default App;