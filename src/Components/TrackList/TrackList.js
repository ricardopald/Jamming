import React from 'react';

//import Track
import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends React.Component{
  render(){
    //console.log(this.props);
    return(
      <div className="TrackList">
          {
              this.props.tracks.map(function (track){
                console.log(track);
              return (<Track key={track.id} track={track}/>);
            })
          }
      </div>
    );
  }
}

export default TrackList;
