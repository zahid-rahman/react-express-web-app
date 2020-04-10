import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './pages/Test';
import Client from './pages/Client';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Test></Test> */}
          <Client></Client>
      </div>
    );
  }
}

export default App;
