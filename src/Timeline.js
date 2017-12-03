import React, { Component } from 'react';

const d3 = Object.assign(
  {},
  require('d3-selection'),
  require('d3-jetpack'),
  require('d3-scale'),
  require('d3-time-format')
);

class Timeline extends Component {
  componentDidMount() {}
  makeSVG() {
    return d3
      .select('#timeline')
      .at({
        width: 300,
        height: 100,
      })
      .st({ backgroundColor: '#f8f7f1' });
  }

  componentDidMount() {
    this.makeSVG();
  }

  componentDidUpdate() {
    this.t_string = Math.round(this.props.t);
  }

  render(props) {
    return (
      <div>
        <h4>timeline: {this.t_string}</h4>
        <svg id="timeline" />
      </div>
    );
  }
}

export default Timeline;
