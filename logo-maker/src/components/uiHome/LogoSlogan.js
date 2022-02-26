import React, { useContext, useRef } from 'react'
import { AppContext } from '../../App';
import Position from './TextCustomcomponents/Position';
import TextColor from './TextCustomcomponents/TextColor';

export default function () {
    const {slogan,setSlogan,sloganPosi,setSloganPosi,setSloganColor,slogancolor} = useContext(AppContext)
    const sloganRef = useRef(null)

    const textChange = (e)=>{
        setSlogan(e.target.value) 
    }
    const positionChange = (e)=>{
        const values = e
        const x=values[0],y=values[1]
        setSloganPosi({x,y})
    }
    const callback = (e)=>{
        setSloganColor(e)
    }

  return (
    <div>
        
        <input type="text" name='slogan' placeholder="Slogan" onChange={textChange} ref={sloganRef}/>
        {sloganRef.current && <>
        <Position handleposition={positionChange} currentx={sloganPosi.x} currenty={sloganPosi.y} name={slogan}/>
        <TextColor ParentCallback={callback} color={slogancolor}/>
        </>
        }
    </div>
  )
}
