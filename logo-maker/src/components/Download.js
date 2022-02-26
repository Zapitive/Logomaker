import React from 'react'
import SvgContainer from './uiHome/SvgContainer'

export default function Download() {
  const svg = document.getElementById("logo_svg")
  const handleClick = () =>{
    
    console.log(svg)
  }

  return (
    <div className="work_div">
      <a href={SvgContainer} download="My_File.pdf"> Download Here </a>
    </div>
  )
}
