import React, { Component } from 'react';

const VideoDetail = ({video}) => {
    
    if ( !video ){
        return (
            <div className="col-md-8">
            Loading...
            </div>
        );
    }else{
        
        let embed_URL = 'https://www.youtube.com/embed/'+video.id.videoId;

        return (
          <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={embed_URL}></iframe>
            </div>
            <div className="description">
              <br/>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        );
        
    }

}

export default VideoDetail;