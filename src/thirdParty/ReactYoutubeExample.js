import React, { Component } from 'react';
import YouTube from 'react-youtube';
// https://www.youtube.com/watch?v=s4aIk0x5Eus
// https://youtu.be/s4aIk0x5Eus

class ReactYoutubeExample extends Component {

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target)
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        const {videoId} = this.props

        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady}
            />
        );
    }
}

export default ReactYoutubeExample;
