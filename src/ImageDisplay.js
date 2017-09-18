import React, { Component } from 'react';
import './ImageDisplay.css'


class ImageDisplay extends Component {
  render() {
    let image = this.props.image
    let ratingButtons = [];
    for (let i = 0; i < 5; i++) {
      ratingButtons.push(
        <button
          className="rating"
          key={`rating${i}`}
          onClick={() => {
            this.props.handleClick(image["entry_uuid"], i + 1);
          }}
          >{i + 1}</button>
      )
    }

    return (
      <div className="poll">
        <div className="artContainer">
          <img className="art"
               alt="art"
               src={image["image"]}
               width="50%"
               height="auto" />
        </div>
        <div className="title">{image["title"]}</div>
        <div className="artist">by {image["artist"]}</div>
        <div className="ratingContainer">
          {ratingButtons}
        </div>
      </div>
    );
  }
}

export default ImageDisplay;
