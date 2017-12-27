import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import videoFile from './rickroll.mp4';

class Video extends Component {
  render(props) {
    const config = {
      autoplay: true,
      controls: true,
      style: {
        margin: '0 auto',
      },
      width: 400,
    };

    /*
     * onProgress and onDuration come from <Timekeeper />
     * they shall set state up there
     */
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
