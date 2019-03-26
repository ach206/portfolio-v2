import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import logo from './images/braidout-black-logo.png';
import PlaceholderImg from './images/macbook-mock-dribbble.svg';
import TypingAni from './comps/TypingAni';
import About from './comps/About';
// import GalleryCard from './comps/GalleryCard';
import BlockText from './comps/BlockText';
import ApriImg from './images/apri-mac.png';
import BODImg from './images/bandsondemand-mac.png';
import CSClubImg from './images/csclub-mac.png';
import EdenSavvyImg from './images/edensavvy-mac-3.png';
import FroggerImg from './images/frogger-mac.png';
import FullmoonReleaseImg from './images/fullmoon-release-mac.png';
import GirlBombImg from './images/girlbomb-mac.png';
import GitHubImg from './images/githubUniverse-mac-2.png';
import KdramaImg from './images/kdrama-mac.png';
import KdramaFbImg from './images/kdrama-fb-mac.png';
import matchGameImg from './images/matchingGame-mac.png';
// import * as serviceWorker from './serviceWorker';



const anchors = ["Home", "About", "Gallery", "Resume"];
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
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
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
            <div class="slide" data-anchor="slide2">
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
              <img class="gallery-img" data-src={BODImg} alt="gallery"/>
              </div>
            </div>
            <div class="slide" data-anchor="slide3">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={CSClubImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide4">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={EdenSavvyImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide5">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={FroggerImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide6">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={FullmoonReleaseImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide7">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={GirlBombImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide8">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={KdramaImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide9">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={KdramaFbImg} alt="gallery"/>
            </div>
            <div class="slide" data-anchor="slide10">
              <h3>GirlBomb</h3>
              <p><span class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</span></p>
              <ul class="list-stack">
                <li class="list-stack-item">Python</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Three.js</li>
              </ul>
              <a href="#">See Demo</a>
              <img class="gallery-img" data-src={matchGameImg} alt="gallery"/>
            </div>
          </div>
          <div className="section contact">
            <p>Section 2</p>
            <p>contact</p>
              <img class="gallery-img" data-src={GitHubImg} alt="gallery"/>
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