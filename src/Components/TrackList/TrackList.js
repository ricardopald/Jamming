import React from 'react';
import ReactDOM from 'react-dom';

//import Track
import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends React.Component{
  render(){
    <div className="TrackList">
        {
            this.props.tracks.map(function (track){
            return (<Track key={track.id} track={track}/>);
          })
        }
    </div>
  }
}

export default TrackList;
