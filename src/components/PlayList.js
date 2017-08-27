import React, { Component } from 'react';

import PlayListItem from './PlayListItem.js';

class PlayList extends Component {

  constructor() {
    super();

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        });
  }

  fetchData = () => {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log('refresh');
      })
    }

  render() {
    return (
      <div className='playlist'>
        <button onClick={() => this.fetchData()}>Reload Playlist</button>
        {this.state.songs.map((song) => {
          return (
            <PlayListItem key={song._id} song={song} />
          )
        })}
      </div>
    )
  }

}

export default PlayList;
