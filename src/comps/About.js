import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about_section">
                <p>Hello</p>
                <p>
                    I am Camille Hall. I am a Seattle based full-stack
                    developer. I enjoy contributing to projects that
                    allow me to work in cross-functional teams and promote
                    autonomy within my position.
                </p>
                <p>Growth</p>
                <p>
                    Here's a trick that took me some time to master...
                    let's see if you already know it. 
                        <span>We are constantly in growth.</span>
                </p>
                <p>Goals AF</p>
                <p>
                    Fun fact: I want to travel the world speaking at tech
                    \& design conferences and get paid to help others break
                    into tech. 
                </p>
                <h3>TL;DR</h3>
                <p>Name: Camille Hall</p>
                <p>Location: Greater Seattle area</p>
                <p>For Hire: Open to Frontend and UI Development*</p>
                <span><em>*willing to relocate</em></span>
            </div>
        );
    }
}

export default About;