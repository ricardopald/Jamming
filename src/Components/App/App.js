import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResults : [{name:'Yellow', artist:'Coldplay', album:'Parachutes'}],
      playlistName : 'ABCD',
      playlistTracks : [
        {name:'Yellow', artist:'Coldplay', album:'Parachutes'},
        {name:'Shiver', artist:'Coldplay', album:'Parachutes'},
        {name:'Clocks', artist:'Coldplay', album:'Parachutes'}
      ],
    };
  }

  addTrack(track){
  }

  render() {
    console.log(this.state.playlistTracks);
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
