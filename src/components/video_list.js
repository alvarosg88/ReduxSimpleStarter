import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    
    let videos = props.videos;

    let videoList = videos.map(video => {
        return (
          <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} video={video} 
          />
        );
    });
    
    return (
    <div className="col-md-4">
        <div className="list-group">
          {videoList}
        </div>
    </div>
    );
}

export default VideoList;