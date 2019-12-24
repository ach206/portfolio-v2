import React, { Component } from "react";

export default class SlideWrapper extends Component {
  render() {
    const { project } = this.props
    return (
      <div className="slide" data-anchor="slide3">
        <div className="gallery-cntr">
          <div className="gallery-content">
            <h3>{project}</h3>
            
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
              conception to deployment for Highline College's Computer Science
              Club. Highlighted features include a sleek dark-theme design and
              also an Admin portal which allows administrators to securely
              modify stored content on the database.{" "}
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
    );
  }
}
