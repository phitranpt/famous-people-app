import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <section>
          <h2>Add Person</h2>
          <form onSubmit={this.props.submitBtn}>
            <label htmlFor="name">Name:</label>
            <input id="name" onChange={this.props.handleChangeFor('name')} 
                   value={this.props.person.name} />
            <label htmlFor="role">Role:</label>
            <input id="role" onChange={this.props.handleChangeFor('role')} 
                   value={this.props.person.role} />
            <input type="submit" value="Add Person" /> 
          </form>
        </section>
    );
  }
}

export default Form;