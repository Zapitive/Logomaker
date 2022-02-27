import React from 'react'
import {RangeStepInput} from 'react-range-step-input';

export default function IconSize({ParentCallback,size}) {


    const handleChange =(e)=>{
        ParentCallback(e.target.value)
    }

  return (
    <div>
        <RangeStepInput
                min={50} max={300}
                value={size} step={1}
                onChange={handleChange}
            />
    </div>
  )
}
