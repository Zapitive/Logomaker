import React from 'react'
import {RangeStepInput} from 'react-range-step-input';

export default function FontSize({ParentCallback,size}) {


    const handleChange =(e)=>{
        ParentCallback(e.target.value)
    }

  


  return (
    <div>
        <input type="range"
                min={12} max={100}
                value={size} step={1}
                onChange={handleChange}
            />
    </div>
  )
}
