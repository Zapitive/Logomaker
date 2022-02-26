import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../App';
import FontSize from './TextCustomcomponents/FontSize';
import FontStyle from './TextCustomcomponents/FontStyle';
import Position from './TextCustomcomponents/Position';
import TextAngle from './TextCustomcomponents/TextAngle';
import TextColor from './TextCustomcomponents/TextColor';

export default function () {
    const {setTitlePosi,titlePosi,setTitle,title,setTitleColor,titlecolor,setFontStyle,titleSize,setTitleSize,titleAngele,setTitleAngle} = useContext(AppContext)
    const titleRef = useRef(null)

    const textChange = (e)=>{
            setTitle(e.target.value)    
    }
    const positionChange = (e)=>{
        const values = e
        const x=values[0],y=values[1]
        setTitlePosi({x,y})
    }
    const callback = (e)=>{
        setTitleColor(e)
    }

    const callbackfont = (e)=>{
        setFontStyle(e)
    }

    const callbackSize = (e) =>{
        setTitleSize(e)
        console.log(e)
    }

    const callbackAngle = (e) =>{
        setTitleAngle(e)
    }
  return (
    <div>
        <input type="text" name='TitleText' placeholder="Logo Title" onChange={textChange} ref={titleRef} />
        {titleRef.current && <>
        <Position handleposition={positionChange} currentx={titlePosi.x} currenty={titlePosi.y} name={title}/>
        <TextColor ParentCallback={callback} color={titlecolor}/>
        <FontStyle ParentCallback={callbackfont} />
        <FontSize ParentCallback={callbackSize} size={titleSize}/>
        <TextAngle ParentCallback={callbackAngle} angle={titleAngele} />
        </>
        }
    </div>
  )
}
