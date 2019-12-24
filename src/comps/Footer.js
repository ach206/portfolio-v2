import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
        <ul className="footer-icons">
            <li className="socialIcons"><a href="https://github.com/ach206" target="_blank" title="github"><span className="fab fa-github fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.linkedin.com/in/ach206" target="_blank" title="linkedin"><span className="fab fa-linkedin fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.behance.net/ach206" target="_blank" title="behance"><span className="fab fa-behance fa-2x"></span></a></li>
            <li className="socialIcons"><a href="https://www.twitter.com/camillehall12" target="_blank" title="twitter"><span className="fab fa-twitter-square fa-2x"></span></a></li>
        </ul>
            </div>
        );
    }
}

export default Footer;
