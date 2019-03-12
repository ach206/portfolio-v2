import React, { Component } from 'react';
import './App.css';
import TypingAni from './comps/TypingAni';
import logo from './images/afro2.jpg';
import TileBW from './comps/TileBW';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <img src={logo} alt="logo" id={logo}/>
      <TypingAni />
        </div>
        <div className="tiles-cntr">
      <TileBW tileID={1} title={"about"} icon={"fingerprint"} asset={"inactive-asset"}/>
      <TileBW tileID={2} title={"gallery"} icon={"important_devices"} asset={"inactive-asset"}/>
      <TileBW tileID={3} title={"resume"} icon={"description"} asset={"triangle"} />
        </div>

      </div>
    );
  }
}

export default App;
