import React from 'react';
import ReactDOM from 'react-dom';

import './Track.css';

class Track extends React.Component {
  renderAction(){
    (this.isRemoval){

    }
  }

  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"><!-- + or - will go here --></a>
    </div>
  }
}

export default Track;
