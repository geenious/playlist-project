import React, { Component } from 'react';

class PlayListForm extends Component {

  constructor() {
    super();

    this.state = {
      userName: '',
      songTitle: '',
      songArtist: '',
      songNotes: ''
    }
  }

  nameChange(evt) {
    this.setState({
      userName: evt.target.value
    });
  }

  artistChange(evt) {
    this.setState({
      songArtist: evt.target.value
    });
  }

  titleChange(evt) {
    this.setState({
      songTitle: evt.target.value
    });
  }

  notesChange(evt) {
    this.setState({
      songNotes: evt.target.value
    });
  }



  addToList = (e) => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response, "yay");

    })
    .catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form className='form' method='post'>

          <label>User Name</label>
          <input value={this.state.userName} onChange={(evt) => this.nameChange(evt)}/>
          <label>Artist/Band</label>
          <input value={this.state.songArtist} onChange={(evt) => this.artistChange(evt)}/>
          <label>Song Title</label>
          <input value={this.state.songTitle} onChange={(evt) => this.titleChange(evt)}/>
          <label>Song Notes</label>
          <input value={this.state.songNotes} onChange={(evt) => this.notesChange(evt)}/>
          <button onClick={this.addToList}>submit</button>

      </form>
    )
  }
}

export default PlayListForm;
