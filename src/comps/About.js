import React, { Component } from 'react';
import CamilleImg from './../images/DSC3135.jpg';


class About extends Component {
    render() {
        return (
        <div className="about_section">
        <img src={CamilleImg} alt="Camille" className="about-img"/>
             <div className="about_section_text">
                <p><span>Hello</span>
                <br/>
                    I am Camille Hall. I'm a Seattle-based full stack
                    developer. I enjoy contributing to projects that
                    allow me to work in cross-functional teams and encourage
                    autonomy within my position.
                </p>
                <p><span>Growth</span>
                    <br/>
                    From Designer to Developer—One of the greatest things I learned after high school was 
                     that I cannot wait for opportunities to come to me but rather I had to 
                     create my own successes. Go after what I want or create my own lane! My path 
                     was not at all smooth; it came with many setbacks and few but measurable successes. 
                     One of the most valuable things I can do now is to 
                    continue to defy all odds just as many of the women in tech have done in the past.
                </p>
                <p><span>Goals</span>
                    <br/>
                    I want to travel the world speaking at tech
                    & design conferences and get paid to help others break
                    into tech. 
                </p>
            </div>
        </div>
        );
    }
}

export default About;
