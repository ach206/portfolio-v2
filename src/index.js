import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import logo from './images/braidout-black-logo.png';
import TypingAni from './comps/TypingAni';
import About from './comps/About';
// import GalleryCard from './comps/GalleryCard';
import BlockText from './comps/BlockText';

import ApriImg from './images/apri-mac_md.png';
import BODImg from './images/bandsondemand-mac_md.png';
import CSClubImg from './images/csclub-mac_md.png';
import EdenSavvyImg from './images/edensavvy-mac-3_md.png';
import FroggerImg from './images/frogger-mac_md.png';
import FullmoonReleaseImg from './images/fullmoon-release-mac_md.png';
import GirlBombImg from './images/girlbomb-mac_md.png';
import GitHubImg from './images/githubUniverse-mac-2_md.png';
import KdramaImg from './images/kdrama-mac_md.png';
import KdramaFbImg from './images/kdrama-fb-mac_md.png';
import matchGameImg from './images/matchingGame-mac_md.png';
import resumeImg from './images/resume-pic.png';
// import * as serviceWorker from './serviceWorker';



const anchors = ["Home", "About", "Gallery", "Press","Resume"];
const Fullpage = () => (
  <ReactFullpage
  anchors={anchors}
  navigation
  //   sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#2d8460"]}
  navigationTooltips={anchors}
  css3={true}
	autoScrolling={true}
    fadingEffect={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          < div className = "section home fp-auto-height-responsive" >
        <img src={logo} alt="logo" class="home-img"/>
      < TypingAni />

            {/* <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
          </div>
          < div className ="section about fp-auto-height-responsive" >
          <div className="about">

          < BlockText />
            < About />
            </div>
          </div>
          <div className="section gallery">

            <div class="slide" data-anchor="slide1">
              <div class="gallery-cntr">
                <h3>APRI Seattle</h3>
                <div class="gallery-overlay">
                  <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
                </div>
                <ul class="list-stack">
                  <li class="list-stack-item">Python</li>
                  <li class="list-stack-item">JavaScript</li>
                  <li class="list-stack-item">React.js</li>
                  <li class="list-stack-item">Three.js</li>
                </ul>
                <a href="#">See Demo</a>
             <img class="gallery-img" data-src={ApriImg} />
             {/* <GalleryCard stack={'HTML'} projectName="GirlBomb" description="SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied."/>  */}
            </div>
            </div>

            <div class="slide" data-anchor="slide2">
            <div class="gallery-cntr">
              <h3>Bands</h3>
              <div class="gallery-overlay">
              <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              </div>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" src={BODImg} alt="gallery"/>
              </div>
            </div>

            <div class="slide" data-anchor="slide3">
              <div class="gallery-cntr">
                <h3>Computer Science Club</h3>
                <div class="gallery-overlay">
                  <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
                </div>
                <ul class="list-stack">
                  <li class="list-stack-item">Python</li>
                  <li class="list-stack-item">JavaScript</li>
                  <li class="list-stack-item">React.js</li>
                  <li class="list-stack-item">Three.js</li>
                </ul>
                <a href="#">See Demo</a>
              <img class="gallery-img" src={CSClubImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide4">
              <div class="gallery-cntr">
                <h3>Edens Savvy Creations</h3>
                <div class="gallery-overlay">
                  <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
                </div>
                <ul class="list-stack">
                  <li class="list-stack-item">Python</li>
                  <li class="list-stack-item">JavaScript</li>
                  <li class="list-stack-item">React.js</li>
                  <li class="list-stack-item">Three.js</li>
                </ul>
                <a href="#">See Demo</a>
              <img class="gallery-img" src={EdenSavvyImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide5">
              <div class="gallery-cntr">
                <h3>Frogger Game</h3>
                <div class="gallery-overlay">
                  <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
                </div>
                <ul class="list-stack">
                  <li class="list-stack-item">Python</li>
                  <li class="list-stack-item">JavaScript</li>
                  <li class="list-stack-item">React.js</li>
                  <li class="list-stack-item">Three.js</li>
                </ul>
                <a href="#">See Demo</a>
              <img class="gallery-img" src={FroggerImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide6">
            <div class="gallery-cntr">
              <h3>Full Moon Release</h3>
              <div class="gallery-overlay">
              <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              </div>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" src={FullmoonReleaseImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide7">
            <div class="gallery-cntr">
              <h3>GirlBomb</h3>
              <div class="gallery-overlay">
              <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              </div>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" src={GirlBombImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide8">
              <div class="gallery-cntr">
                <h3>K-Drama Connection</h3>
                <div class="gallery-overlay">
                  <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
                </div>
                <ul class="list-stack">
                  <li class="list-stack-item">Python</li>
                  <li class="list-stack-item">JavaScript</li>
                  <li class="list-stack-item">React.js</li>
                  <li class="list-stack-item">Three.js</li>
                </ul>
                <a href="#">See Demo</a>
              <img class="gallery-img" src={KdramaImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide9">
            <div class="gallery-cntr">
              <h3>K-Drama Connection</h3>
              <div class="gallery-overlay">
              <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              </div>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" src={KdramaFbImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide10">
            <div class="gallery-cntr">
              <h3>Matching Game</h3>
              <div class="gallery-overlay">
              <p class="gallery-content"><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              </div>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" src={matchGameImg} alt="gallery"/>
            </div>
            </div>

          </div>
          <div className="section feature">
              <img class="gallery-img" data-src={GitHubImg} alt="gallery"/>
          </div>
          <div className="section contact">
            <div class="contact-cv">
              < a href = "./data/resume.pdf" >
                <img src={resumeImg} alt="resume CV" />
                <div class="overlay">
                  <div class="resume-hover-text">Download Camille's Resume</div>
                </div>
              </a>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
    />
);

ReactDOM.render(<Fullpage />, document.getElementById('root'));


    // // If you want your app to work offline and load faster, you can change
    // // unregister() to register() below. Note this comes with some pitfalls.
    // // Learn more about service workers: http://bit.ly/CRA-PWA
    // serviceWorker.unregister();