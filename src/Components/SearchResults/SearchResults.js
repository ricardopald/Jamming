import React from 'react';
import ReactDOM from 'react';

//import TrackList
import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

class SearchResults extends React.Component{
  render(){
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={this.props.searchResults}/>
    </div>
  }
}

export default SearchResults;
