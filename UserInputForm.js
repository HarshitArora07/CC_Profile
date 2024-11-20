// src/components/UserInputForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      location: '',
      bio: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, location, bio } = this.state;
    if (name && age && location && bio) {
      this.props.onSubmit({ name, age: parseInt(age), location, bio });
      this.setState({ name: '', age: '', location: '', bio: '' });
    } else {
      alert('Please fill out all fields');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={this.state.bio}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add Profile</button>
      </form>
    );
  }
}

UserInputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default UserInputForm;
