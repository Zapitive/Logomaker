import React from 'react'

export default function TextCustomize() {
    
    const submitclick = (e) =>{
        console.log(e.target.value)
    }

  return (
    <div>
        <h4>Text Size</h4>
        <input type="number" onChange={submitclick}/>
    </div>
  )
}
