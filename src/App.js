import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "hi"
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      width: '60%',
      margin: '16px auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center'
    }

    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} name={this.state.username}/>
        <UserOutput style={style} username={this.state.username}/>
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
