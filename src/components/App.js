import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js';
import PlayList from './PlayList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayList />
      </div>
    );
  }
}

export default App;
