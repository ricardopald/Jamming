import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResults : [],
      playlistName = '',
      playlistTracks = [],
    };
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchResults = {this.state.SearchResults}/>
          <div className="App-playlist">
            <SearchResults />
            <Playlist playlistName ={this.state.playlistName} playlistTracks ={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
