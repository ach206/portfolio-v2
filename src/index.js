import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import logo from './images/braidout-black-logo.png';
import TypingAni from './comps/TypingAni';
import About from './comps/About';
// import GalleryCard from './comps/GalleryCard';
import BlockText from './comps/BlockText';
import { Document } from 'react-pdf';

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
import resumePdf from './data/resume.pdf';
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
          <div className="section gallery fp-auto-height-responsive">

            <div class="slide" data-anchor="slide1">
              <div class="gallery-cntr">
              <div class="gallery-content">
                <h3>APRI Seattle</h3>
                <ul class="list-stack">
                  <li class="list-stack-item list-title">Stack</li>
                  <li class="list-stack-item">Sketch</li>
                  <li class="list-stack-item">HTML</li>
                  <li class="list-stack-item">CSS</li>
                  <li class="list-stack-item">Photoshop</li>
                  <li class="list-stack-item">jQuery</li>
                </ul>
                  <p class="gallery-description">As the UI Designer on this project I assisted this non-profit organization with redesigning their UI for their January 2019 website launch. Duties included translated mockups into responsive, interactive features, using HTML/CSS and JavaScript. In addition to collaborating with the Marketing Director to define and implement product direction,
 visuals and overall best practice for optimal user experience. </p>
                 <a href="#" class="gallery-demo-btn">See Demo</a>
            </div>
             <img class="gallery-img" data-src={ApriImg} alt="APRI project" />
             {/* <GalleryCard stack={'HTML'} projectName="GirlBomb" description="SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied."/>  */}
            </div>
              </div>

            <div class="slide" data-anchor="slide2">
            <div class="gallery-cntr">
            <div class="gallery-content">
              <h3>Bands</h3>
              <ul class="list-stack">
                <li class="list-stack-item list-title">Stack</li>
                <li class="list-stack-item">React.js</li>
                <li class="list-stack-item">Foursquare API</li>
                <li class="list-stack-item">Google Maps API</li>
                <li class="list-stack-item">TypeScript</li>
                <li class="list-stack-item">HTML/CSS/JS</li>
                <li class="list-stack-item">Git version control</li>

              </ul>
              <p class="gallery-description">This personal project required engineering a web-based application using React to develop the
                UI. This app assists with finding venues that host live music bands in the Austin, TX area. Google
                Maps API and Foursquare API were used to extract real-time data. Fetch was used to make
                asynchronous requests and handle returned data. Also, best practices included consistent use of
                the command line and Git for version control.</p>
               <a href="#" class="gallery-demo-btn">See Demo</a>
              </div>
              <img class="gallery-img" src={BODImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide3">
              <div class="gallery-cntr">
                <div class="gallery-content">
                <h3>Computer Science Club</h3>
                <ul class="list-stack">
                  <li class="list-stack-item list-title">Stack</li>
                  <li class="list-stack-item">PHP</li>
                  <li class="list-stack-item">HTML/CSS/JS</li>
                  <li class="list-stack-item">MySQL</li>
                  <li class="list-stack-item">Google Calendar API</li>
                  <li class="list-stack-item">Figma</li>
                  <li class="list-stack-item">Git version control</li>

                </ul>
                  <p class="gallery-description">This project consisted of engineering a PHP website from conception to deployment for Highline College's Computer Science Club. Highlighted features include a sleek dark-theme design and also an Admin portal which allows administrators to securely modify stored content on the database. </p>
                 <a href="#" class="gallery-demo-btn">See Demo</a>
                </div>
              <img class="gallery-img" src={CSClubImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide4">
              <div class="gallery-cntr">
                <div class="gallery-content">
                <h3>Edens Savvy Creations</h3>
                <ul class="list-stack">
                  <li class="list-stack-item list-title">Stack</li>
                  <li class="list-stack-item">Adobe Illustrator</li>
                  <li class="list-stack-item">Adobe </li>
                </ul>
                  <p class="gallery-description">Assisted a startup company in converting hard copy paper decals into digital vector
                  graphics to be able to reach a larger customer base and boost sales.</p>
                 <a href="#" class="gallery-demo-btn">See Demo</a>
                </div>
              <img class="gallery-img" src={EdenSavvyImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide5">
              <div class="gallery-cntr">
                <div class="gallery-content">
                <h3>Frogger Game</h3>
                <ul class="list-stack">
                  <li class="list-stack-item list-title">Stack</li>
                  <li class="list-stack-item">JavaScript OOP</li>
                  <li class="list-stack-item">HTML5 Canvas</li>
                  <li class="list-stack-item">CSS</li>
                  <li class="list-stack-item">Git version control</li>
                </ul>
                  <p class="gallery-description">Used HTML's Canvas and JavaScript's ES6 Class to implement entities to the game including the player character and enemies to recreate the classic 1981 arcade game Frogger. Game Engine loop provided by <a href="https://udacity.com">Udacity</a></p>
                 <a href="#" class="gallery-demo-btn">See Demo</a>
                </div>
              <img class="gallery-img" src={FroggerImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide6">
            <div class="gallery-cntr">
              <div class="gallery-content">
              <h3>Full Moon Release</h3>
              <ul class="list-stack">
                <li class="list-stack-item list-title">Stack</li>
                <li class="list-stack-item">Adobe Photoshop</li>
                <li class="list-stack-item">Unsplash</li>
              </ul>
              <p class="gallery-description">An expressive piece of photo collage art represenative of
              the purging of old baggage that happens during each full moon cycle. </p>  
               <a href="#" class="gallery-demo-btn">See Demo</a>
              </div>
              <img class="gallery-img" src={FullmoonReleaseImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide7">
            <div class="gallery-cntr">
              <div class="gallery-content">
              <h3>GirlBomb</h3>
              <ul class="list-stack">
                <li class="list-stack-item list-title">Stack</li>
                <li class="list-stack-item">Sketch</li>
                <li class="list-stack-item">Adobe Photoshop</li>
                <li class="list-stack-item">HTML/CSS</li>
                <li class="list-stack-item">Wix</li>
              </ul>
              <p class="gallery-description">Assisted in redesigning an existing website including creating prototypes, graphics
              and optimizing images for the company’s web pages in time for their new product
              launch.</p>  
               <a href="#" class="gallery-demo-btn">See Demo</a>
              </div>
              <img class="gallery-img" src={GirlBombImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide8">
              <div class="gallery-cntr">
                <div class="gallery-content">
                <h3>K-Drama Connection</h3>
                <ul class="list-stack">
                  <li class="list-stack-item list-title">Stack</li>
                  <li class="list-stack-item">Sketch</li>
                  <li class="list-stack-item">HTML/CSS</li>
                  <li class="list-stack-item">Adobe Illustrator</li>
                  <li class="list-stack-item">Shopify</li>
                </ul>
                  <p class="gallery-description">Redesigned eCommerce website, created company logo, and produced marketing graphics
                  that increased web traffic by 33%.</p>
                 <a href="#" class="gallery-demo-btn">See Demo</a>
                </div>
              <img class="gallery-img" src={KdramaImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide9">
            <div class="gallery-cntr">
              <div class="gallery-content">
              <h3>K-Drama Connection</h3>
              <ul class="list-stack">
                <li class="list-stack-item list-title">Stack</li>
                <li class="list-stack-item">Adobe Photoshop</li>
              </ul>
              <p class="gallery-description">SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied.</p>  
               <a href="#" class="gallery-demo-btn">See Demo</a>
              </div>
              <img class="gallery-img" src={KdramaFbImg} alt="gallery"/>
            </div>
            </div>

            <div class="slide" data-anchor="slide10">
            <div class="gallery-cntr">
              <div class="gallery-content">
              <h3>Matching Game</h3>
              <ul class="list-stack">
                <li class="list-stack-item list-title">Stack</li>
                <li class="list-stack-item">HTML</li>
                <li class="list-stack-item">JavaScript</li>
                <li class="list-stack-item">CSS</li>
              </ul>
              <p class="gallery-description"> All hail the matching game!This one holds a speical place in my heart because it was my first ever programming project.The memory game represented my first opportunity to fully combine my skills in HTML, CSS, and JavaScript. The primary focus was centered around event handlers and functions. Future developments include refactoring to ES6 and redesigning the UI. </p>  
               <a href="#" class="gallery-demo-btn">See Demo</a>
              </div>
              <img class="gallery-img" src={matchGameImg} alt="gallery"/>
            </div>
            </div>

          </div>
          <div className="section feature">
              <img class="gallery-img" data-src={GitHubImg} alt="gallery"/>
          </div>
          <div className="section contact">
          <Document file={resumePdf} href="http://adobe.ly/2JHpVfU"/>
          {/* https: //adobe.ly/2JHpVfU */}
            {/* <div class="contact-cv">
              < a href = "./data/resume.pdf" >
                <img src={resumeImg} alt="resume CV" />
                <div class="overlay">
                  <div class="resume-hover-text">Download Camille's Resume</div>
                </div>
              </a>
            </div> */}
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