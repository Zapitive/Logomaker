import React from 'react'


const saveSvgAsPng = require('save-svg-as-png')

const imageOptions = {
  scale: 1,
  encoderOptions: 1
}

export default function Download() {

  const handleClick = () =>{
    saveSvgAsPng.saveSvgAsPng(document.getElementById('logo_svg'), 'shapes.png', imageOptions);
  }
  
  return (
    <div className="work_div">
      <button onClick={handleClick}>Download</button>
    </div>
  )
}
