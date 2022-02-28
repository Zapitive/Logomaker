import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import TextColor from './TextColor'

export default function SloganStroke() {
    const {setSloganStroke,setSloganStrokeWidth,setSloganStrokeColor,sloganStroke,sloganStrokeWidth,sloganStrokeColor} = useContext(AppContext)

    const handleChange = ()=>{
        setSloganStroke(!sloganStroke)
    }

    const handleClick = (e) =>{
        if(e.target.name==="+"){
            setSloganStrokeWidth(sloganStrokeWidth+1)
        }
        else{
            setSloganStrokeWidth(sloganStrokeWidth-1)
        }
    }

    const callback = (e) =>{
        setSloganStrokeColor(e)
    }

  return (
    <div>
        <input type="checkbox" checked={sloganStroke} onChange={handleChange}/>
        {sloganStroke && 
            <div>
                <button name='-' onClick={handleClick}>-</button>
                <label className='label'>{sloganStrokeWidth}</label>
                <button name='+' onClick={handleClick}>+</button>
                <TextColor ParentCallback={callback} color={sloganStrokeColor} />
            </div>}
    </div>
  )
}
