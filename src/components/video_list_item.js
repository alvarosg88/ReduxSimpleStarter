import React, { Component } from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
    
        return (
          <a href="#" onClick={() => onVideoSelect(video)}
            className="list-group-item">
            <div className="media-left">
                <img src={video.snippet.thumbnails.default.url}/>
            </div>
            <div className="media-body">
                <p><strong>{video.snippet.title}</strong></p>
            </div>
          </a>
        );
}

export default VideoListItem;