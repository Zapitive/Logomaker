import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import TextColor from './TextColor'

export default function Stroke() {
    const {titleStroke,setTitleStroke,titleStrokeWidth,setTitleStrokeWidth,titleStrokeColor,setTitleStrokeColor} = useContext(AppContext)

    const handleChange = ()=>{
        setTitleStroke(!titleStroke)
    }

    const handleClick = (e) =>{
        if(e.target.name==="+"){
            setTitleStrokeWidth(titleStrokeWidth+1)
        }
        else{
            setTitleStrokeWidth(titleStrokeWidth-1)
        }
    }

    const callback = (e) =>{
        setTitleStrokeColor(e)
    }

  return (
    <div>
        <input type="checkbox" checked={titleStroke} onChange={handleChange}/>
        <label>Stroke</label> 
        {titleStroke && 
            <div>
                <button name='+' onClick={handleClick}>+</button>
                <label>{titleStrokeWidth}</label>
                <button name='-' onClick={handleClick}>-</button>
                <TextColor ParentCallback={callback} color={titleStrokeColor} />
            </div>}
    </div>
  )
}
