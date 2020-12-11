import './App.css';
import React from 'react';
import Board from './board/board';
import ImageSearch from './imageSearch/imageSearch'
import BoardVideo from './board/boardVideo';

const API_KEY = "19435337-59a77b980b37e8c813d079adb"



class App extends React.Component {
  state = {
    images: [],
    videos: [],
    isSubmitted: false
  };

  handleGetRequest = async (event) => {
    event.preventDefault();

    const searchValue = event.target.elements.searchValue.value;

    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo&per_page=7`;
    const URL_video = `https://pixabay.com/api/videos/?key=${API_KEY}&q=${searchValue}&per_page=3`;
    
    const request = await fetch(URL);
    const response = await request.json();

    const request_video = await fetch(URL_video);
    const response_video = await request_video.json();

    this.setState({ images : response.hits });
    this.setState({ videos : response_video.hits});

    this.setState({ isSubmitted : true});
  }

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        {this.state.isSubmitted &&
        <div className="table">
          Click the desired tile to save the image or video on the tile as JSON:
          <div>
            <Board images={this.state.images[0]}/>
            <Board images={this.state.images[1]}/>
            <Board images={this.state.images[2]}/>
          </div>
          <div>
            <Board images={this.state.images[3]}/>
            <Board images={this.state.images[4]}/>
            <Board images={this.state.images[5]}/>
          </div>
          <div>
            <Board images={this.state.images[6]}/>
            <BoardVideo videos={this.state.videos[0]}/>
            <BoardVideo videos={this.state.videos[1]}/>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default App;