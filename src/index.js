import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Document , Page, pdfjs} from 'react-pdf';
import './App.css';
import logo from './images/braidout-black-logo.png';
import TypingAni from './comps/TypingAni';
import About from './comps/About';
import BlockText from './comps/BlockText';
import Footer from './comps/Footer';
import ReadMoreBtn from './comps/ReadMoreBtn';

import ApriImg from './images/apri-mac_md.png';
import BODImg from './images/bandsondemand-mac_md.png';
import CSClubImg from './images/csclub-mac_md.png';
import EdenSavvyImg from './images/edensavvy-mac-3_md.png';
import FroggerImg from './images/frogger-mac_md.png';
import FullmoonReleaseImg from './images/fullmoon-release-mac_md.png';
import GirlBombImg from './images/girlbomb-mac_md.png';
import KdramaImg from './images/kdrama-mac_md.png';
import KdramaFbImg from './images/kdrama-fb-mac_md.png';
import matchGameImg from './images/matchingGame-mac_md.png';
import resumePdfView from './data/resume.pdf';
import pdf from './data/resume.pdf';



import * as serviceWorker from './serviceWorker';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends React.Component {
  state = {
    readMoreBtnVisible: true,
  };
  constructor(props) {
    super(props);
    this.showHide = this.showHide.bind(this);

  }
  
  displayLivePdf() {
    window.open(pdf, '_blank');
  }
    // if (dots.style.display === "none") {
  //   dots["0"].style.display = "inline";
  //   btnText["0"].innerHTML = "Read more";
  //   moreText["0"].style.display = "none";
  // } else {
  //   dots["0"].style.display = "none";
  //   btnText["0"].innerHTML = "Read less";
  //   moreText["0"].style.display = "inline";
  // }
 showHide(evt) {
   let dots = document.getElementsByClassName('read-more-dots');
   let moreText = document.getElementsByClassName('read-more-text');
   let moreBtn = document.getElementsByClassName('read-more-btn');
    if(dots[evt.currentTarget.value].style.display === "none"){
      dots[evt.currentTarget.value].style.display = "inline";
      moreText[evt.currentTarget.value].style.display = "none";
      moreBtn[evt.currentTarget.value].innerHTML = "Read more";
    } else {
      moreBtn[evt.currentTarget.value].innerHTML = "Read less";
      dots[evt.currentTarget.value].style.display = "none";
      moreText[evt.currentTarget.value].style.display = "inline";
    }
  }
  
  render() {
    
  const anchors = ["Home", "About", "Gallery", "Press", "Resume"];
  
  
  return (
  <div className="App">

  {/* const Fullpage = () => ( */}
  <ReactFullpage
  anchors={anchors}
  navigation
  navigationTooltips={anchors}
  css3={true}
  autoScrolling={true}
  responsiveWidth={769}
  responsiveHeight={600}
  fadingEffect={true}
  sectionsColor={["#ffffff", "#ffffff" ,"#ffffff", "#0f151f", "#ffffff"]}
  render={({ state, fullpageApi }) => {
    // state = {
    //   readMoreBtnVisible: true,
    // }
    return (
      <ReactFullpage.Wrapper>

          <div className="section home fp-auto-height-responsive">
        <img src={logo} alt="logo" className="home-img"/>
      < TypingAni />
          </div>
          <div className="section about fp-auto-height-responsive">
          <div className="about">

          < BlockText />
            < About />
            </div>
          </div>
          <div className="section gallery fp-auto-height-responsive">

            <div className="slide" data-anchor="slide1">
              <div className="gallery-cntr">
              <div className="gallery-content">
                <h3>APRI Seattle</h3>
                <ul className="list-stack">
                  <li className="list-stack-item list-title">Stack</li>
                  <li className="list-stack-item">Sketch</li>
                  <li className="list-stack-item">HTML</li>
                  <li className="list-stack-item">CSS</li>
                  <li className="list-stack-item">Photoshop</li>
                  <li className="list-stack-item">jQuery</li>
                </ul>
                  <p className="gallery-description">As the UI Designer on this project I assisted this non-profit organization with redesigning their UI for their January 2019 website<span className="read-more-dots show">...</span><span className="read-more-text hide"> launch. Duties included translated mockups into responsive, interactive features, using HTML/CSS and JavaScript. In addition to collaborating with the Marketing Director to define and implement product direction,
 visuals and overall best practice for optimal user experience. </span></p>
 <ReadMoreBtn showhide={this.showHide} buttonId={0}/>

                 <a href="https://apriseattle.org" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
            </div>
             <img className="gallery-img" data-src={ApriImg} alt="APRI project" />
             {/* <GalleryCard stack={'HTML'} projectName="GirlBomb" description="SSR is supported however the server-rendered html will not be styled, this is because window must be present in order to properly set height + width of slides. So long as you rehydrate your fullpage component in the browser environment, regular styles will be applied."/>  */}
            </div>
              </div>

            <div className="slide" data-anchor="slide2">
            <div className="gallery-cntr">
            <div className="gallery-content">
              <h3>Bands</h3>
              <ul className="list-stack">
                <li className="list-stack-item list-title">Stack</li>
                <li className="list-stack-item">React.js</li>
                <li className="list-stack-item">Foursquare API</li>
                <li className="list-stack-item">Google Maps API</li>
                <li className="list-stack-item">TypeScript</li>
                <li className="list-stack-item">HTML/CSS/JS</li>
                <li className="list-stack-item">Git version control</li>

              </ul>
              <p className="gallery-description">This personal project required engineering a web-based application using React to develop the
                UI<span className="read-more-dots">...</span><span className="read-more-text">. This app assists with finding venues that host live music bands in the Austin, TX area. Google
                Maps API and Foursquare API were used to extract real-time data. Fetch was used to make
                asynchronous requests and handle returned data. Also, best practices included consistent use of
                the command line and Git for version control.</span></p>
                <ReadMoreBtn showhide={this.showHide} buttonId={1}/>

               <a href="https://ach206.github.io/bands-on-demand" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
              </div>
              <img className="gallery-img" src={BODImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide3">
              <div className="gallery-cntr">
                <div className="gallery-content">
                <h3>Computer Science Club</h3>
                <ul className="list-stack">
                  <li className="list-stack-item list-title">Stack</li>
                  <li className="list-stack-item">PHP</li>
                  <li className="list-stack-item">HTML/CSS/JS</li>
                  <li className="list-stack-item">MySQL</li>
                  <li className="list-stack-item">Google Calendar API</li>
                  <li className="list-stack-item">Figma</li>
                  <li className="list-stack-item">Git version control</li>

                </ul>
                  <p className="gallery-description">This project consisted of engineering a PHP 
                  website from conception to deployment<span className="read-more-dots show">...</span><span className="read-more-text hide">  for Highline College's Computer Science Club. Highlighted 
                  features include a sleek dark-theme design and also an Admin portal which allows 
                  administrators to securely modify stored content on the database. </span></p>
                  <ReadMoreBtn showhide={this.showHide} buttonId={2}/>
                 <a href="https://chelan.highline.edu/~ach206/215/Final_Computer_Science_Club/pages/" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
                </div>
              <img className="gallery-img" src={CSClubImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide4">
              <div className="gallery-cntr">
                <div className="gallery-content">
                <h3>Edens Savvy Creations</h3>
                <ul className="list-stack">
                  <li className="list-stack-item list-title">Stack</li>
                  <li className="list-stack-item">Adobe Illustrator</li>
                  <li className="list-stack-item">Adobe Photoshop</li>
                </ul>
                  <p className="gallery-description">Assisted a startup company in converting hard copy paper decals into digital vector<span className="read-more-dots show">...</span><span className="read-more-text hide"> 
                  graphics to be able to reach a larger customer base and boost sales.</span></p>
                  <ReadMoreBtn showhide={this.showHide} buttonId={3}/>

                 <a href="https://www.behance.net/gallery/71068113/Digital-Templates" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
                </div>
              <img className="gallery-img" src={EdenSavvyImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide5">
              <div className="gallery-cntr">
                <div className="gallery-content">
                <h3>Frogger Game</h3>
                <ul className="list-stack">
                  <li className="list-stack-item list-title">Stack</li>
                  <li className="list-stack-item">JavaScript OOP</li>
                  <li className="list-stack-item">HTML5 Canvas</li>
                  <li className="list-stack-item">CSS</li>
                  <li className="list-stack-item">Git version control</li>
                </ul>
                  <p className="gallery-description">Used HTML's Canvas and JavaScript's ES6 Class to implement <span className="read-more-dots show">...</span><span className="read-more-text hide">entities to the game including the player character and enemies to recreate the classic 1981 arcade game Frogger. Game Engine loop provided by <a href="https://udacity.com">Udacity</a></span></p>
                  <ReadMoreBtn showhide={this.showHide} buttonId={4}/>

                 <a href="https://ach206.github.io/frontend-nanodegree-arcade-game/" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
                </div>
              <img className="gallery-img" src={FroggerImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide6">
            <div className="gallery-cntr">
              <div className="gallery-content">
              <h3>Full Moon Release</h3>
              <ul className="list-stack">
                <li className="list-stack-item list-title">Stack</li>
                <li className="list-stack-item">Adobe Photoshop</li>
                <li className="list-stack-item">Unsplash</li>
              </ul>
              <p className="gallery-description">An expressive piece of photo collage art represenative of
              the purging of old baggage<span className="read-more-dots show">...</span><span className="read-more-text hide"> that happens during each full moon cycle. </span></p>   <ReadMoreBtn showhide={this.showHide} buttonId={5}/>
               <a href="https://www.behance.net/gallery/71069549/K-Drama-Website-Redesign" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
              </div>
              <img className="gallery-img" src={FullmoonReleaseImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide7">
            <div className="gallery-cntr">
              <div className="gallery-content">
              <h3>GirlBomb</h3>
              <ul className="list-stack">
                <li className="list-stack-item list-title">Stack</li>
                <li className="list-stack-item">Sketch</li>
                <li className="list-stack-item">Adobe Photoshop</li>
                <li className="list-stack-item">HTML/CSS</li>
                <li className="list-stack-item">Wix</li>
              </ul>
              <p className="gallery-description">Assisted in redesigning an existing website including creating prototypes,<span className="read-more-dots show">...</span><span className="read-more-text hide">  graphics
              and optimizing images for the company’s web pages in time for their new product
              launch.</span></p>   
              <ReadMoreBtn showhide={this.showHide} buttonId={6}/>
               <a href="https://www.girlbomb.com/" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
              </div>
              <img className="gallery-img" src={GirlBombImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide8">
              <div className="gallery-cntr">
                <div className="gallery-content">
                <h3>K-Drama Connection</h3>
                <ul className="list-stack">
                  <li className="list-stack-item list-title">Stack</li>
                  <li className="list-stack-item">Sketch</li>
                  <li className="list-stack-item">HTML/CSS</li>
                  <li className="list-stack-item">Adobe Illustrator</li>
                  <li className="list-stack-item">Shopify</li>
                </ul>
                  <p className="gallery-description">Redesigned eCommerce website, created company logo,<span className="read-more-dots show">...</span><span className="read-more-text hide">  and produced marketing graphics
                  that increased web traffic by 33%.</span></p>
                  <ReadMoreBtn showhide={this.showHide} buttonId={7}/>
                 <a href="https://www.behance.net/gallery/71069549/K-Drama-Website-Redesign" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
                </div>
              <img className="gallery-img" src={KdramaImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide9">
            <div className="gallery-cntr">
              <div className="gallery-content">
              <h3>K-Drama Connection</h3>
              <ul className="list-stack">
                <li className="list-stack-item list-title">Stack</li>
                <li className="list-stack-item">Adobe Photoshop</li>
              </ul>
                <p className="gallery-description">Lead designer for this client's Facebook campaigns. Established, <span className="read-more-dots show">...</span><span className="read-more-text hide">designed and managed implementation and consistency of brand guidelines for marketing assets and other web graphics.</span></p>  
                <ReadMoreBtn showhide={this.showHide} buttonId={8}/>
               <a href="https://www.behance.net/gallery/71069549/K-Drama-Website-Redesign" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
              </div>
              <img className="gallery-img" src={KdramaFbImg} alt="gallery"/>
            </div>
            </div>

            <div className="slide" data-anchor="slide10">
            <div className="gallery-cntr">
              <div className="gallery-content">
              <h3>Matching Game</h3>
              <ul className="list-stack">
                <li className="list-stack-item list-title">Stack</li>
                <li className="list-stack-item">HTML</li>
                <li className="list-stack-item">JavaScript</li>
                <li className="list-stack-item">CSS</li>
              </ul>
              <p className="gallery-description"> All hail the matching game! This one holds a speical place in my heart because it was my first <span className="read-more-dots show">...</span><span className="read-more-text hide">ever programming project.The memory game represented my first opportunity to fully combine my skills in HTML, CSS, and JavaScript. The primary focus was centered around event handlers and functions. Future developments include refactoring to ES6 and redesigning the UI. </span></p>  
              <ReadMoreBtn showhide={this.showHide} buttonId={9}/>
               <a href="https://ach206.github.io/memory-game/" target="_blank" rel="noopener noreferrer" className="gallery-demo-btn">See Demo</a>
              </div>
              <img className="gallery-img" src={matchGameImg} alt="gallery"/>
            </div>
            </div>

          </div>
          <div className="section feature">
          <div className="slide" data-anchor="slide1">
          <iframe title="GitHub Universe Interview with Camille" width="560" height="315" src="https://www.youtube.com/embed/WSi_GxfCCA8?start=3811" frameBorder="0" allow="accelerometer; autoplay=; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <h2>Want more? Check out my interview from <a href="https://www.youtube.com/watch?v=WSi_GxfCCA8&t=63m30s" target="_blank" rel="noopener noreferrer"> GitHub Universe 2018</a></h2>
            </div>
          <div className="slide" data-anchor="slide2">
            <h2>Written Pieces</h2>
            <p><a href="https://medium.com/@camille_66528/i-know-why-companies-arent-hiring-junior-developers-73efcb9f4ede" target="_blank" rel="noopener noreferrer" className="feature-links">I know why companies aren’t hiring junior developers.</a></p>
           <p> <a href="https://www.linkedin.com/pulse/my-first-github-universe-experience-camille-hall/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BiBupD6jcQC6JK2%2Fep959Dg%3D%3D" target="_blank" rel="noopener noreferrer" className="feature-links">My First GitHub Universe Experience</a></p>

          </div>
          </div>
          <div className="section contact fp-auto-height-responsive">
          <div className="contactCntr">
          <div className="contact-right-aside">
          <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="ach206"><a className="LI-simple-link" href='https://www.linkedin.com/in/ach206?trk=profile-badge'>Camille Hall</a></div>

          <Footer/>
          </div>
          <Document file={resumePdfView}  className="pdf-doc hvr-pulse-grow" onClick={this.displayLivePdf }
          >
          <Page pageNumber={1}/>
          </Document>
          </div>
          </div>
        </ReactFullpage.Wrapper>
    );
    // );
  }}
  />
  </div>
);
}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


    // // If you want your app to work offline and load faster, you can change
    // // unregister() to register() below. Note this comes with some pitfalls.
    // // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.register();