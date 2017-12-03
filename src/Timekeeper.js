import React, { Component } from 'react';
import Timeline from './Timeline';

const d3 = Object.assign({}, require('d3-timer'));

class Timekeeper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      t: null,
      duration: 5,
    };
  }

  setTimer() {
    const durationInMS = this.state.duration * 1000;
    // const t = d3.timer(elapsed => {
    //   // console.log(elapsed);
    //   this.setState({
    //     t: elapsed,
    //   });
    //   if (elapsed > durationInMS) t.stop();
    // }, 1000);

    const t = d3.interval(elapsed => {
      const rnd = Math.random() * (5 - 0) + 0;
      this.setState({ t: rnd * 1000 });
    }, 1000);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentDidUpdate() {}

  render(props) {
    return <Timeline totalTime={this.state.duration} t={this.state.t} />;
  }
}

export default Timekeeper;
