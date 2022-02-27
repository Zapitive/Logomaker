import React, { useContext } from 'react'
import { AppContext } from '../../App';
import Position from './TextCustomcomponents/Position';
import TextColor from './TextCustomcomponents/TextColor';
import FontStyle from './TextCustomcomponents/FontStyle';
import Stroke from './TextCustomcomponents/Stroke';
import FontSize from './TextCustomcomponents/FontSize';
import TextAngle from './TextCustomcomponents/TextAngle';
import SloganStroke from './TextCustomcomponents/SloganStroke';

export default function () {
    const {slogan,setSlogan,sloganPosi,setSloganPosi,setSloganColor,slogancolor,setSloganFontStyle,setSloganAngle,setSloganSize,
        sloganAngle,sloganSize
    } = useContext(AppContext)

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

    const callbackSize = (e) =>{
        setSloganSize(e)
    }

    const callbackAngle = (e) =>{
        setSloganAngle(e)
    }

  return (
    <div className='customtext_div'>
        <div className='inp-border a2'>
        <input className='input' type="text" name='slogan' placeholder="Slogan" onChange={textChange} />
        </div>
        
        {slogan && <>
        <Position handleposition={positionChange} currentx={sloganPosi.x} currenty={sloganPosi.y} name={slogan}/>
        <TextColor ParentCallback={callback} color={slogancolor}/>
        <FontStyle ParentCallback={callbackfont} />
        <FontSize ParentCallback={callbackSize} size={sloganSize}/>
        <TextAngle ParentCallback={callbackAngle} angle={sloganAngle} />
        <SloganStroke />
        </>
        }
    </div>
  )
}
