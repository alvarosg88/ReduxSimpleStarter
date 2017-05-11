import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBkmvC9HKZUYYzHlbKlo5ZxaE3RVFDri2k';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos : [] };
        YTSearch({key:API_KEY,term:'super sentai'}, (videos) => {
            this.setState({ videos });
            console.log(this.state.videos)
        });
    }
    
    render () {
        return  (
            <div className="col-md-12">
                <SearchBar />
            </div>
        );
    } 
}

ReactDOM.render(<App />, document.querySelector('#app-container'));