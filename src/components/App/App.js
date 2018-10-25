import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

class App extends Component {

state = {
  person: {
    name: 'Phi',
    role: 'Prime Student'
  },
  peopleList: [],
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
  event.preventDefault();
  console.log('button works!');
  console.log('saving new person', this.state.person);
  
  this.setState({
    person: {
      name: '',
      role: '',
    },
    peopleList: [...this.state.peopleList, this.state.person], 
  })
}

  render() {
    return (
      <div className="App">>
        <Header />
          <FamousPersonForm submitBtn={this.submitBtn} 
            handleChangeFor={this.handleChangeFor} 
            person={this.state.person} />
          <FamousPersonList list={this.state.peopleList} />
      </div>
    );
  }
}

export default App;
