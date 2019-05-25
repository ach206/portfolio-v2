import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
        <ul className="footer-icons">
            <li className="socialIcons"><a href="https://github.com/ach206" target="_blank" rel="noopener noreferrer" title="github"><span className="fab fa-github fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.linkedin.com/in/ach206" target="_blank" rel="noopener noreferrer" title="linkedin"><span className="fab fa-linkedin fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.behance.net/ach206" target="_blank" rel="noopener noreferrer" title="behance"><span className="fab fa-behance fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.instagram.com/camillehall.js/" target="_blank" rel="noopener noreferrer" title="instagram"><span className="fab fa-instagram fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.twitter.com/camillehall12" target="_blank" rel="noopener noreferrer" title="twitter"><span className="fab fa-twitter-square fa-2x"></span></a></li>
        </ul>
        <p className="footer-disclaimer">
          Made with &#10084; from Seattle <br/>
Designed &#38; Developed by Camille Hall<br/><br/>
            2015-2019 Creative Ambition&#8482; 
            </p>
            </div>
        );
    }
}

export default Footer;
