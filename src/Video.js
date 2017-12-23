import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Video.css';
import videoFile from './video.mp4';

class Video extends Component {
  render(props) {
    const config = {
      autoplay: true,
      width: 400,
      controls: true,
      style: {
        margin: '0 auto',
      },
    };

    return (
      <div>
        <ReactPlayer
          url={videoFile}
          width={config.width}
          style={config.style}
          controls={config.controls}
          onProgress={this.props.onVideoProgress}
          onDuration={this.props.onVideoDurationCalculated}
          playing
        />
      </div>
    );
  }
}

export default Video;
