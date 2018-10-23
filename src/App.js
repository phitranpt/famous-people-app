import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  person: {
    name: 'Phi',
    role: 'Prime Student'
  },
}

handleChangefor = (propertyName) => {
  return (event) => {
    this.setState ({
      person: {
        ...this.state.person,
        [propertyName]: event.target.value
      }
    })
  }
}

submitBtn = (event) => {
  console.log('btn clicked');
  console.log(this.state.person.name);
  console.log(this.state);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Famous People</h1>
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <section>
            <input onChange={this.handleChangefor('name')} placeholder="name" /><br></br>
            <input onChange={this.handleChangefor('role')} placeholder="role" /><br></br>
            <button onClick={this.submitBtn}>Submit</button>
            <p>{this.state.person.name} is famous for {this.state.person.role}</p>
          </section>
      </div>
    );
  }
}

export default App;
