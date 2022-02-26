import React from 'react'
import {RangeStepInput} from 'react-range-step-input';

export default function ({ParentCallback,angle}) {

    const handleChange =(e)=>{
        ParentCallback(e.target.value)
    }
  return (
    <div>
        <RangeStepInput
                min={0} max={360}
                value={angle} step={1}
                onChange={handleChange}
            />
    </div>
  )
}
