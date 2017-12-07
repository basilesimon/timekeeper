import React, { Component } from 'react';
import Timeline from './Timeline';
import Video from './Video';

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
    // const durationInMS = this.state.duration * 1000;
    // const t = d3.timer(elapsed => {
    //   // console.log(elapsed);
    //   this.setState({
    //     t: elapsed,
    //   });
    //   if (elapsed > durationInMS) t.stop();
    // }, 1000);

    // At regular intervals of 1000ms,
    // callback sets a new `t` value to state
    // eslint-disable-next-line
    const t = d3.interval(elapsed => {
      const rnd = Math.random() * (5 - 0) + 0;
      this.setState({ t: rnd * 1000 });
    }, 2000);
  }

  componentDidMount() {
    this.setTimer();
  }

  render(props) {
    return (
      <div>
        <Timeline totalTime={this.state.duration} t={this.state.t} />
        <Video currentTime={this.state.t} />
      </div>
    );
  }
}

export default Timekeeper;
