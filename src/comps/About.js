import React, { Component } from 'react';
import styled from 'styled-components';
import CamilleImg from './../images/DSC3135.jpg';


class About extends Component {
    render() {
        return (
        <div className="about_section">
        <img src={CamilleImg} alt="Camille" class="about-img"/>
             <div className="about_section_text">
                <p>Hello
                <br/>
                    I am Camille Hall. I'm a Seattle based full-stack
                    developer. I enjoy contributing to projects that
                    allow me to work in cross-functional teams and encourage
                    autonomy within my position.
                </p>
                <p>Growth
                    <br/>
                    Here's a trick that took me some time to master...
                    let's see if you already know it. 
                        <span>We are constantly in growth.</span>
                </p>
                <p>Goals AF
                    <br/>
                    Fun fact: I want to travel the world speaking at tech
                    & design conferences and get paid to help others break
                    into tech. 
                </p>
                <p>TL;DR <br/>
                <strong>Name</strong>: Camille Hall<br/>
                <strong>Location</strong>: Greater Seattle area<br/>
                <strong>For Hire</strong>: Open to Frontend and UI Development*</p>
                <span class="about_memo"><em>*willing to relocate</em></span>
            </div>
        </div>
        );
    }
}

export default About;

const AboutImg = styled.div `
    
`;

const AboutSection = styled.div `
    
`;