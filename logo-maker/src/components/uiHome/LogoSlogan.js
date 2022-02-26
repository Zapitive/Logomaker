import React, { useContext, useRef } from 'react'
import { AppContext } from '../../App';
import Position from './TextCustomcomponents/Position';
import TextColor from './TextCustomcomponents/TextColor';
import FontStyle from './TextCustomcomponents/FontStyle';

export default function () {
    const {slogan,setSlogan,sloganPosi,setSloganPosi,setSloganColor,slogancolor,setSloganFontStyle} = useContext(AppContext)
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
    const callbackfont = (e)=>{
        setSloganFontStyle(e)
    }

  return (
    <div>
        
        <input type="text" name='slogan' placeholder="Slogan" onChange={textChange} ref={sloganRef}/>
        {sloganRef.current && <>
        <Position handleposition={positionChange} currentx={sloganPosi.x} currenty={sloganPosi.y} name={slogan}/>
        <TextColor ParentCallback={callback} color={slogancolor}/>
        <FontStyle ParentCallback={callbackfont} />
        </>
        }
    </div>
  )
}
