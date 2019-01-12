import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    username: "hi",
    input: ''
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  changeInputText = (event) => {
    this.setState( {input: event.target.value} )
  }

  removeCharHandler = (index) => {
    const newInput = this.state.input.split('');
    newInput.splice(index, 1);
    this.setState( {input: newInput.join('')});
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

    let chars = null;

    chars = this.state.input.split('').map((c, index) => {
      return <CharComponent 
        char={c} 
        click={() => this.removeCharHandler(index)}/>
    });

    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} name={this.state.username}/>
        <UserOutput style={style} username={this.state.username}/>
        <UserOutput />
        <UserOutput />
        <input onChange={this.changeInputText} />
        <p>The length is: {this.state.input.length}</p>
        <ValidationComponent text={this.state.input} />
        {chars}
      </div>
    );
  }
}

export default App;
