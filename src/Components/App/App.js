import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      SearchResults : [{name:'Hardest Part', artist:'Coldplay', album:'X&Y'}],
      playlistName : 'ABCD',
      playlistTracks : [
        {name:'Yellow', artist:'Coldplay', album:'Parachutes'},
        {name:'Shiver', artist:'Coldplay', album:'Parachutes'},
        {name:'Clocks', artist:'Coldplay', album:'Parachutes'}
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    /*You could use a combination of `.map` and `.some` to check if
      there is some track with the added tracks ID already playlistTracks.*/
    if(this.state.playlistTracks.map(function(playlistTrack,track){
        playlistTrack.some(function(playlistTrack,track){
          return (playlistTrack === track);
        })
    })){
      let updatedPlaylist = this.state.playlistTracks.concat(track);
      this.setState({ playlistTracks: updatedPlaylist });
    }
  }

  removeTrack(track){
    if(this.state.playlistTracks.map(function(playlistTrack,track){
        playlistTrack.some(function(playlistTrack,track){
          return (playlistTrack === track);
        })
    })){
      let updatedPlaylist = this.state.playlistTracks.concat(track);
      this.setState({ playlistTracks: updatedPlaylist });
    }
  }

  updatePlaylistName(name){
    this.setState(
      { playlistName: name}
    );
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(function(playlistTrack){
      return (playlistTrack.uri);
    });
  }

  search(term){
    console.log(searchTerm);
  }

  render() {
    //console.log(this.state.playlistTracks);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults = {this.state.SearchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.onRemove} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
