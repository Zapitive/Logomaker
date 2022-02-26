import React, { Component } from "react";
import ImageWrapper from "./ImageWrapper";

const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 20,
  encoderOptions: 1,
  backgroundColor: 'white',
}

class DownloadApp extends Component {

  handleClick = () => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById('svg-chart'), 'shapes.png', imageOptions);
  };

  render() {
    return (
      <div className="App">
        <ImageWrapper />
        <br />
        <button onClick={this.handleClick}>Download Image</button>
      </div>
    );
  }
}

export default DownloadApp;