import React from 'react'
import SvgContainer from './uiHome/SvgContainer';


const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 1,
  encoderOptions: 1
}

export default function Download() {
const logo = React.createElement();
  const handleClick = () =>{
    saveSvgAsPng.saveSvgAsPng(document.getElementById('logo_svg'), 'shapes.png', imageOptions);
  }
  
  return (
    <div className="work_div">
      <SvgContainer />
      <button onClick={handleClick} className="button-73">Download</button>
    </div>
  )
}
