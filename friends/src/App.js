import React, { Component } from 'react';
import axios from 'axios';
import Friend from './friends';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [ {
        id: '',
        name: '',
        age: '',
        email: ''
        }
      ],
      name: "",
      age: "",
      email: ""
    };
    
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(err => {
      throw new Error(err);
    })
  };


  render() {
    return (
      <div className="App">
      <div>
       {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend}  />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
