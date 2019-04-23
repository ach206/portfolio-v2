import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
        <ul class="footer-icons">
            <li class="socialIcons"><a href="https://github.com/ach206" target="_blank" rel="noopener noreferrer" title="github"><span class="fab fa-github fa-2x"></span></a></li>
            <li class="socialIcons"><a href="https://www.linkedin.com/in/ach206" target="_blank" rel="noopener noreferrer" title="linkedin"><span class="fab fa-linkedin fa-2x"></span></a></li>
            <li class="socialIcons"><a href="https://www.behance.net/ach206" target="_blank" rel="noopener noreferrer" title="behance"><span class="fab fa-behance fa-2x"></span></a></li>
            <li class="socialIcons"><a href="https://www.instagram.com/camillehall.js/" target="_blank" rel="noopener noreferrer" title="instagram"><span class="fab fa-instagram fa-2x"></span></a></li>
            <li class="socialIcons"><a href="https://www.twitter.com/camillehall12" target="_blank" rel="noopener noreferrer" title="twitter"><span class="fab fa-twitter-square fa-2x"></span></a></li>
        </ul>
            </div>
        );
    }
}

export default Footer;
