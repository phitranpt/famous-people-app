import React, { Component } from 'react';
import Header from '..Header/Header';
import './App.css';

class App extends Component {

state = {
  person: {
    name: 'Phi',
    role: 'Prime Student'
  },
  peopleList = [],
}

handleChangeFor = propertyName => event => {
    this.setState ({
      person: {
        ...this.state.person,
        [propertyName]: event.target.value
      }
    });
  }

submitBtn = (event) => {
  console.log('button works!');
  console.log('saving new person', this.state.person);
  this.setState({
    person: {
      name: '',
      role: '',
    },
    peopleList: [...this.state.person, this.state.person], 
  })
}

  render() {
    return (
      <div>>
        <header />
          <form submitBtn={this.submitBtn} 
          handleChangeFor={this.handleChangeFor} 
          peopleList={this.state.peopleList} />
          <peopleList list={this.state.peopleList} />


            <input onChange={this.handleChangeFor('name')} placeholder="name" /><br></br>
            <input onChange={this.handleChangeFor('role')} placeholder="role" /><br></br>
            <button onClick={this.submitBtn}>Submit</button>
            <p>{this.state.person.name} is famous for {this.state.person.role}</p>
      </div>
    );
  }
}

export default App;
