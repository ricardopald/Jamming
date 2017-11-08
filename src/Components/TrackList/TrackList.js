import React from 'react';
//import Track
import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.onAdd);
    return(
      <div className="TrackList">
          {
              this.props.tracks.map(track =>{
              return (<Track key={track.id} onAdd={this.props.onAdd} track={track}/>);
            })
          }
      </div>
    );
  }
}

export default TrackList;
