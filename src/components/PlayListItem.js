import React, { Component } from 'react';

class PlayListItem extends Component {
  render() {
    return (
      <div className='song'>
        <h3>{this.props.song.songTitle} <span>by</span> {this.props.song.songArtist}</h3>
        <p>{this.props.song.songNotes} - {this.props.song.userName}</p>
      </div>
    )
  }
}

export default PlayListItem;
