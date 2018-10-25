import React, { Component } from 'react';

class PeopleList extends Component {

  render() {
    return (
      <section>
        <h2>All People</h2>
        <ul>
          { this.props.list.map( (people, index) => 
              <li key={index}> {people.name} is famous for {people.role}.</li>
            ) }
        </ul>
      </section>
    );
  }
}

export default PeopleList;