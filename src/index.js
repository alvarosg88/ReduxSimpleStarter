import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBkmvC9HKZUYYzHlbKlo5ZxaE3RVFDri2k';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            videos : [],
            currentVideo : null
        };
        
        this.callYoutube('super sentai')
    }
    
    callYoutube (term) {
        YTSearch({key:API_KEY,term:term}, (videos) => {
            this.setState({
                videos: videos,
                currentVideo : videos[0]
            });
        });
    }

    render () {
        
        const videoSearch = _.debounce(term => this.callYoutube(term), 300)
        
        return  (
            <div>
                <SearchBar 
                    onTermChange={videoSearch}
                />
                <VideoDetail video={ this.state.currentVideo }/>
                <VideoList 
                    onVideoSelect={currentVideo => this.setState({currentVideo})}
                    videos={ this.state.videos }
                /> 
            </div>
        );
    } 
}

ReactDOM.render(<App />, document.querySelector('#app-container'));