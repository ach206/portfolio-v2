import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { Document, Page, pdfjs } from "react-pdf";
import "./App.css";
import { TypingAni, About, BlockText, Footer } from "./comps/";
import { logo, ApriImg, BODImg, CSClubImg, EdenSavvyImg, FroggerImg, FullmoonReleaseImg, GirlBombImg, GitHubImg, KdramaImg, KdramaFbImg, matchGameImg
} from "./images";
import { resumePdfView } from "./data/";

// import * as serviceWorker from './serviceWorker';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let displayLivePdf = () => {
  window.open(resumePdfView, "_blank");
};

const anchors = ["Home", "About", "Gallery", "Press", "Resume"];
const Fullpage = () => (
  <ReactFullpage
    licenseKey= {'wobwH@p8'}
    anchors={anchors}
    navigation
    sectionsColor={["#ffffff", "#ffffff", "#ffffff", "gold", "#ffffff"]}
    navigationTooltips={anchors}
    css3={true}
    autoScrolling={true}
    fadingEffect={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home fp-auto-height-responsive">
            <img src={logo} alt="logo" className="home-img" />
            <TypingAni />
          </div>
          <div className="section about fp-auto-height-responsive">
            <div className="about">
              <BlockText />
              <About />
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
                  <p className="gallery-description">
                    As the UI Designer on this project I assisted this
                    non-profit organization with redesigning their UI for their
                    January 2019 website launch. Duties included translated
                    mockups into responsive, interactive features, using
                    HTML/CSS and JavaScript. In addition to collaborating with
                    the Marketing Director to define and implement product
                    direction, visuals and overall best practice for optimal
                    user experience.{" "}
                  </p>
                  <a
                    href="https://apriseattle.org"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img
                  className="gallery-img"
                  data-src={ApriImg}
                  alt="APRI project"
                />
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
                  <p className="gallery-description">
                    This personal project required engineering a web-based
                    application using React to develop the UI. This app assists
                    with finding venues that host live music bands in the
                    Austin, TX area. Google Maps API and Foursquare API were
                    used to extract real-time data. Fetch was used to make
                    asynchronous requests and handle returned data. Also, best
                    practices included consistent use of the command line and
                    Git for version control.
                  </p>
                  <a
                    href="https://ach206.github.io/bands-on-demand"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={BODImg} alt="gallery" />
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
                  <p className="gallery-description">
                    This project consisted of engineering a PHP website from
                    conception to deployment for Highline College's Computer
                    Science Club. Highlighted features include a sleek
                    dark-theme design and also an Admin portal which allows
                    administrators to securely modify stored content on the
                    database.{" "}
                  </p>
                  <a
                    href="https://chelan.highline.edu/~ach206/215/Final_Computer_Science_Club/pages/"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={CSClubImg} alt="gallery" />
              </div>
            </div>

            <div className="slide" data-anchor="slide4">
              <div className="gallery-cntr">
                <div className="gallery-content">
                  <h3>Edens Savvy Creations</h3>
                  <ul className="list-stack">
                    <li className="list-stack-item list-title">Stack</li>
                    <li className="list-stack-item">Adobe Illustrator</li>
                    <li className="list-stack-item">Adobe </li>
                  </ul>
                  <p className="gallery-description">
                    Assisted a startup company in converting hard copy paper
                    decals into digital vector graphics to be able to reach a
                    larger customer base and boost sales.
                  </p>
                  <a
                    href="https://www.behance.net/gallery/71068113/Digital-Templates"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={EdenSavvyImg} alt="gallery" />
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
                  <p className="gallery-description">
                    Used HTML's Canvas and JavaScript's ES6 Class to implement
                    entities to the game including the player character and
                    enemies to recreate the classic 1981 arcade game Frogger.
                    Game Engine loop provided by{" "}
                    <a href="https://udacity.com">Udacity</a>
                  </p>
                  <a
                    href="https://ach206.github.io/frontend-nanodegree-arcade-game/"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={FroggerImg} alt="gallery" />
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
                  <p className="gallery-description">
                    An expressive piece of photo collage art represenative of
                    the purging of old baggage that happens during each full
                    moon cycle.{" "}
                  </p>
                  <a
                    href="https://www.behance.net/gallery/71069549/K-Drama-Website-Redesign"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img
                  className="gallery-img"
                  src={FullmoonReleaseImg}
                  alt="gallery"
                />
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
                  <p className="gallery-description">
                    Assisted in redesigning an existing website including
                    creating prototypes, graphics and optimizing images for the
                    company’s web pages in time for their new product launch.
                  </p>
                  <a
                    href="https://www.girlbomb.com/"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={GirlBombImg} alt="gallery" />
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
                  <p className="gallery-description">
                    Redesigned eCommerce website, created company logo, and
                    produced marketing graphics that increased web traffic by
                    33%.
                  </p>
                  <a
                    href="https://www.behance.net/gallery/71069549/K-Drama-Website-Redesign"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={KdramaImg} alt="gallery" />
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
                  <p className="gallery-description">
                    SSR is supported however the server-rendered html will not
                    be styled, this is because window must be present in order
                    to properly set height + width of slides. So long as you
                    rehydrate your fullpage component in the browser
                    environment, regular styles will be applied.
                  </p>
                  <a
                    href="https://www.behance.net/gallery/71069549/K-Drama-Website-Redesign"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={KdramaFbImg} alt="gallery" />
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
                  <p className="gallery-description">
                    {" "}
                    All hail the matching game! This one holds a speical place
                    in my heart because it was my first ever programming
                    project.The memory game represented my first opportunity to
                    fully combine my skills in HTML, CSS, and JavaScript. The
                    primary focus was centered around event handlers and
                    functions. Future developments include refactoring to ES6
                    and redesigning the UI.{" "}
                  </p>
                  <a
                    href="https://ach206.github.io/memory-game/"
                    target="_blank"
                    className="gallery-demo-btn"
                  >
                    See Demo
                  </a>
                </div>
                <img className="gallery-img" src={matchGameImg} alt="gallery" />
              </div>
            </div>
          </div>
          <div className="section feature">
            <img className="gallery-img" data-src={GitHubImg} alt="gallery" />
            <h2>
              Want more? Check out my interview from{" "}
              <a
                href="https://www.youtube.com/watch?v=WSi_GxfCCA8&t=63m30s"
                target="_blank"
              >
                {" "}
                GitHub Universe 2018
              </a>
            </h2>
          </div>
          <div className="section contact">
            <div className="contactCntr">
              <div className="contact-right-aside">
                <div
                  className="LI-profile-badge"
                  data-version="v1"
                  data-size="large"
                  data-locale="en_US"
                  data-type="horizontal"
                  data-theme="light"
                  data-vanity="ach206"
                >
                  <a
                    className="LI-simple-link"
                    href="https://www.linkedin.com/in/ach206?trk=profile-badge"
                    SameSite={"None"}
                  >
                    Camille Hall
                  </a>
                </div>

                <Footer />
              </div>
              <Document
                file={resumePdfView}
                className="pdf-doc hvr-pulse-grow"
                onClick={() => {
                  displayLivePdf();
                }}
              >
                <Page pageNumber={1} />
              </Document>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
