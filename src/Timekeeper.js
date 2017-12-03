import React, { Component } from 'react';

class Timekeeper extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <h1>Timekeeper</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Timekeeper;
