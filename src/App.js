import React, { Component } from 'react';
import './App.css';
import TypingAni from './comps/TypingAni';
import logo from './images/braidout-black-logo.png';
import TileBW from './comps/TileBW';
import About from './comps/About';
import styled from 'styled-components';
import BraidoutHair from './images/braidout-hair.png';
import BraidoutFace from './images/braidout-face.png';
import ErrorBoundary from './comps/ErrorBoundary'



class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
        <div className="header">
        <img src={logo} alt="logo" id={logo}/>
      <TypingAni />
        </div>
        <div className="tiles-cntr">
      <TileBW tileID={1} title={"about"} icon={"fingerprint"} asset={"inactive-asset"}/>
      <TileBW tileID={2} title={"gallery"} icon={"important_devices"} asset={"inactive-asset"}/>
      <TileBW tileID={3} title={"resume"} icon={"description"} asset={"triangle"} />
       <Hair>
        <img src={BraidoutHair} alt="logo" id="BraidoutHair"/>
       </Hair>
     <Face>
        <img src={BraidoutFace} alt="logo" id="BraidoutFace"/>
     </Face>
      <About />
        </div>
        </ErrorBoundary>

      </div>
    );
  }
}

export default App;

const Face = styled.img`
transition: transform 3s;  
:hover {
  transform: scale(2);
}
`;
const Hair = styled.img`
transition: transform 3s;
:hover {
  transform: scale(2);
}
`;

