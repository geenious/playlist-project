import React, { Component } from 'react';

class PlayListForm extends Component {
  render() {
    return (
      <div className='form'>
        <label>User Name</label>
        <input />
        <label>Artist/Band</label>
        <input />
        <label>Song Title</label>
        <input />
        <label>Song Notes</label>
        <input />
        <button>submit</button>
      </div>
    )
  }
}

export default PlayListForm;
