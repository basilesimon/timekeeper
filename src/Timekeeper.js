import React, { Component } from 'react';
import Timeline from './Timeline';
import Video from './Video';

const d3 = Object.assign({}, require('d3-timer'));

class Timekeeper extends Component {
  constructor(props) {
    super(props);

    /*
     * videoDuration is set by onDurationVideoCalculated
     * videoPlayingAt is set by onVideoProgress
     */
    this.state = {
      videoDuration: null,
      videoPlayingAt: 0,
    };
  }

  // This fires whenever <VideoPlayer /> has calculated that
  onVideoDurationCalculated = duration => {
    this.setState({
      videoDuration: duration,
    });
  };

  /* This fires every 1000ms from <VideoPlayer />
   * We can tweak this 1000ms variable
   * It sets an object to state, which contains the `playedSeconds` key
   */
  onVideoProgress = state => {
    this.setState({
      videoPlayingAt: state,
    });
  };

  render(props) {
    return (
      <div>
        <Timeline
          totalTime={this.state.videoDuration}
          t={this.state.videoPlayingAt.playedSeconds}
        />
        <Video
          onVideoDurationCalculated={this.onVideoDurationCalculated}
          onVideoProgress={this.onVideoProgress}
        />
      </div>
    );
  }
}

export default Timekeeper;
