import React, { Component } from "react";

export default class SlideWrapper extends Component {
 
  listItems = (items) => {
    items.map((item, index) => {
      return <li key={index} className="list-stack-item">{item}</li>
    })
  }

  render() {
    const { name="Unknown", id="id123", img="", url="", stack=[], description="", index=0 } = this.props
    return (
      <div className="slide" data-anchor={`slide${index+1}`}>
        <div className="gallery-cntr">
          <div className="gallery-content">
            <h3>{name}</h3>

            <ul className="list-stack">
              <li className="list-stack-item list-title">Stack</li>
              {this.listItems(stack)}
            </ul>
            <p className="gallery-description">{description}{" "}
            </p>
            <a
              href={url}
              target="_blank"
              className="gallery-demo-btn"
            >
              See Demo
            </a>
          </div>
          <img className="gallery-img" src={img} alt="gallery" />
        </div>
      </div>
    );
  }
}
