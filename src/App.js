import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Document, Page, pdfjs } from "react-pdf";
import "./App.css";
import { TypingAni, About, BlockText, Footer } from "./comps/";
import { logo, ApriImg, BODImg, CSClubImg, EdenSavvyImg, FroggerImg, FullmoonReleaseImg, GirlBombImg, GitHubImg, KdramaImg, KdramaFbImg, matchGameImg
} from "./images";
import { resumePdfView, GalleryData } from "./data/";
import SlideWrapper from "./comps/SlideWrapper";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let displayLivePdf = () => {
  window.open(resumePdfView, "_blank");
};

let buildGallery = (GalleryData) => {
  let images = [ApriImg, BODImg, CSClubImg, EdenSavvyImg, FroggerImg, FullmoonReleaseImg, GirlBombImg, GitHubImg, KdramaImg, KdramaFbImg, matchGameImg]
  let jsx = []
  GalleryData.map((data, i) => {
    jsx.push( <SlideWrapper key={data.id} name={data.name} img={images[i]} url={data.url} stack={data.stack} description={data.description} index={i} /> )
  })
  return jsx
}

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
            { buildGallery(GalleryData)} 
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
                <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="ach206">
                  <a className="LI-simple-link" href="https://www.linkedin.com/in/ach206?trk=profile-badge" SameSite={"None"}>
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

export default Fullpage