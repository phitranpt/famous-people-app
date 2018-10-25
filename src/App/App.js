import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import PeopleForm from '../Form/PeopleForm';
import PeopleList from '../List/PeopleList';

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
        <Header />
          <PeopleForm submitBtn={this.submitBtn} 
            handleChangeFor={this.handleChangeFor} 
            peopleList={this.state.peopleList} />
          <PeopleList list={this.state.peopleList} />
      </div>
    );
  }
}

export default App;
