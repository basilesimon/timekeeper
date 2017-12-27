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
      .on('click', function() {
        console.log(this);
        const clickCoordinates = d3.mouse(this);
      })
      .append('rect')
      .at({ id: 'progress' })
      .translate([0, 20]);
  }

  /*
   * Draws the progress bar based on where we're at in the video
   * @TODO: wire click event that will:
   * - calculate where the click is compared to axis domain
   * - update where we should be playing the video accordingly
   */
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

  // Still mostly useless at this point since hardcoded
  makeAxis(total) {
    const x = d3
      .scaleLinear()
      .range([0, 300])
      .domain([0, 210]);
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
