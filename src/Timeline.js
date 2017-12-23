import React, { Component } from 'react';

const d3 = Object.assign(
  {},
  require('d3-selection'),
  require('d3-jetpack'),
  require('d3-scale'),
  require('d3-time-format'),
  require('d3-axis')
);

class Timeline extends Component {
  makeSVG() {
    return d3
      .select('#timeline')
      .at({
        width: 300,
        height: 100,
      })
      .st({ backgroundColor: '#f8f7f1', padding: '20px', overflow: 'visible' })
      .append('rect')
      .at({ id: 'progress' })
      .translate([0, 20]);
  }

  progressBar(t, total) {
    const computedWidth = t * 1000 / (total * 1000) * 100 + '%';
    return d3
      .select('#progress')
      .transition()
      .duration(100)
      .at({
        width: computedWidth,
        height: 50,
      });
  }

  makeAxis(total) {
    const x = d3
      .scaleLinear()
      .range([0, 300])
      .domain([0, 810]);
    return d3
      .select('#timeline')
      .append('g')
      .at({ id: 'bottomAxis' })
      .translate([0, 70])
      .call(d3.axisBottom(x));
  }

  componentDidMount() {
    this.makeSVG();
    this.makeAxis(this.props.totalTime);
  }

  componentDidUpdate() {
    this.progressBar(this.props.t, this.props.totalTime);
  }

  render(props) {
    return (
      <div>
        <h4>timeline: {Math.round(this.props.t)}</h4>
        <svg id="timeline" />
      </div>
    );
  }
}

export default Timeline;
