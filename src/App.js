import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Document, Page, pdfjs } from "react-pdf";
import "./App.css";
import { TypingAni, About, BlockText, Footer } from "./comps/";
import {
  logo, ApriImg, myReads, gitSocial,  BODImg, CSClubImg, EdenSavvyImg, FroggerImg, FullmoonReleaseImg, GirlBombImg, KdramaImg, KdramaFbImg, matchGameImg, yellPoster, 
} from "./images";
import { resumePdfView, GalleryData } from "./data/";
import SlideWrapper from "./comps/SlideWrapper";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class App extends React.Component {

  displayLivePdf = () => {
    window.open(resumePdfView, "_blank");
  };

  buildGallery = (GalleryData) => {
    let images = [ApriImg, myReads, gitSocial,  BODImg, CSClubImg, EdenSavvyImg, FroggerImg, FullmoonReleaseImg, GirlBombImg, KdramaImg, KdramaFbImg, matchGameImg, yellPoster]
    let jsx = []
    GalleryData.map((data, i) => {
      jsx.push(<SlideWrapper key={data.id} name={data.name} img={images[i]} url={data.url} stack={data.stack} description={data.description} index={i} />)
    })
    return jsx
  }

  showHide(evt) {
    let dots = document.getElementsByClassName('read-more-dots');
    let moreText = document.getElementsByClassName('read-more-text');
    let moreBtn = document.getElementsByClassName('read-more-btn');
    if (dots[evt.currentTarget.value].style.display === "none") {
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
        <ReactFullpage
          licenseKey={'wobwH@p8'}
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
                  {this.buildGallery(GalleryData)}
                </div>
                <div className="section feature">
          <div className="slide" data-anchor="slide1">
            <h1>Appearances</h1>
          <iframe title="GitHub Universe Interview with Camille" width="560" height="315" src="https://www.youtube.com/embed/WSi_GxfCCA8?start=3811" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <h2>Want more? Check out my interview from <a href="https://www.youtube.com/watch?v=WSi_GxfCCA8&t=63m30s" target="_blank" rel="noopener noreferrer"> GitHub Universe 2018</a></h2>
            </div>
          <div className="slide" data-anchor="slide2">
            <h2>Features</h2>
            <p><a href="https://twitter.com/frauvis/status/1205170701314990085" target="_blank" rel="noopener noreferrer" className="feature-links">Frauvis Issue #43</a></p>
           <p><a href="https://youtu.be/qHDmTVbWJqA?t=480" target="_blank" rel="noopener noreferrer" className="feature-links">2019 Udacity Graduation</a></p>
            <h2>Written Pieces</h2>
            <p><a href="https://medium.com/@camille_66528/i-know-why-companies-arent-hiring-junior-developers-73efcb9f4ede" target="_blank" rel="noopener noreferrer" className="feature-links">I know why companies aren’t hiring junior developers.</a></p>
           <p> <a href="https://www.linkedin.com/pulse/my-first-github-universe-experience-camille-hall/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BiBupD6jcQC6JK2%2Fep959Dg%3D%3D" target="_blank" rel="noopener noreferrer" className="feature-links">My First GitHub Universe Experience</a></p>
           </div>
          </div>
          <div className="section contact fp-auto-height">
          <div className="contactCntr">
          <Document file={resumePdfView}  className="pdf-doc hvr-pulse-grow" onClick={this.displayLivePdf }
          >
          <Page pageNumber={1}/>
          </Document>
          <div className="contact-right-aside">
          <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="ach206"><a className="LI-simple-link" href='https://www.linkedin.com/in/ach206?trk=profile-badge'>Camille Hall</a></div>

          <Footer/>

          </div> 
          </div>
          </div>

        </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    )
  }
}
export default App