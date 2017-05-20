import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoverInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <RoverInput
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

function RoverInput(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Input Mission Details:
          <textarea type="text" value={props.value} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

RoverInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default RoverInputContainer;
