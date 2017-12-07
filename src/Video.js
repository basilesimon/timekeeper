import React, { Component } from 'react';
import videoFile from './video.mp4';

class Video extends Component {
  render(props) {
    const { currentTime } = this.props;

    return (
      <div>
        <video
          src={videoFile}
          autoPlay
          controls
          width="350"
          currenttime={currentTime}
        />
      </div>
    );
  }
}

export default Video;
