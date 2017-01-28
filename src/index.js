import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBrXSGGozPUWnJ1TamirzLWelLKHCvLIcc';

//Youtube API Search



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        YTSearch({key: API_KEY, term: 'iphone'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
            //if the key and value have the same name you can just pass one word            
    }
    render() {
        return ( 
            <div>
                < SearchBar />
                < VideoDetail video={this.state.selectedVideo } />
                < VideoList videos={this.state.videos} /> 
            </div>
        );

    }
}


ReactDOM.render( < App / > , document.querySelector('.container'));