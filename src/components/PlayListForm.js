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

  inputChange(evt, key) {
    const obj = this.state;
    obj[key] = evt.target.value;

    this.setState(obj);
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
      <div className='divform'>
        <form className='form' method='post'>

            <label>User Name</label>
            <input value={this.state.userName} onChange={(evt) => this.inputChange(evt, 'userName')}/>
            <label>Artist/Band</label>
            <input value={this.state.songArtist} onChange={(evt) => this.inputChange(evt, 'songArtist')}/>
            <label>Song Title</label>
            <input value={this.state.songTitle} onChange={(evt) => this.inputChange(evt, 'songTitle')}/>
            <label>Song Notes</label>
            <input value={this.state.songNotes} onChange={(evt) => this.inputChange(evt, 'songNotes')}/>
            <button onClick={this.addToList}>submit</button>

        </form>
      </div>
    )
  }
}

export default PlayListForm;
