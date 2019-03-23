// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import logo from './images/braidout-black-logo.png';
import CamilleImg from './images/DSC3135.jpg';
import TypingAni from './comps/TypingAni';
import About from './comps/About';
import BlockText from './comps/BlockText';


const anchors = ["Home", "About", "Gallery", "Resume"];
const Fullpage = () => (
  <ReactFullpage
//   sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#2d8460"]}
  anchors={anchors}
  navigation
  navigationTooltips={anchors}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home">
        <img src={logo} alt="logo" id={logo}/>
      < TypingAni />

            {/* <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
          </div>
          <div className="section about">
          < BlockText />
            < About />
            <figure>
            <img src={CamilleImg} alt="photo of Camille" />
            <figcaption>Photographer: Gabrielle Prawl</figcaption>
            </figure>
          </div>
          <div className="section gallery">
            <div class="slide" data-anchor="slide1">Two 1</div>
            <div class="slide" data-anchor="slide2">Two 2</div>
          </div>
          <div className="section contact">
            <p>Section 2</p>
            <p>contact</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('root'));
