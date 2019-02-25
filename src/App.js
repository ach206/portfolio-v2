import React, { Component } from 'react';
import './App.css';
import TypingAni from './comps/TypingAni';
import logo from './images/afro2.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
       <TypingAni />
      </div>
    );
  }
}

export default App;
