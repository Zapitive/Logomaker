import React, { useContext } from 'react'
import { AppContext } from '../../App';
import FontSize from './TextCustomcomponents/FontSize';
import FontStyle from './TextCustomcomponents/FontStyle';
import Position from './TextCustomcomponents/Position';
import Stroke from './TextCustomcomponents/Stroke';
import TextAngle from './TextCustomcomponents/TextAngle';
import TextColor from './TextCustomcomponents/TextColor';

export default function () {
    const {setTitlePosi,titlePosi,setTitle,title,setTitleColor,titlecolor,setFontStyle,titleSize,setTitleSize,titleAngle,setTitleAngle} = useContext(AppContext)

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
    <div className='customtext_div'>
        <div className='inp-border a1'>
            <input className='input' type="text" name='TitleText' placeholder="Logo Title" onChange={textChange}  />
        </div>
        
        {title && <>
            <h1>Position:</h1>
            <Position handleposition={positionChange} currentx={titlePosi.x} currenty={titlePosi.y} name={title}/>


        <div className='flexbox'>
        <h1>Color:</h1>
        <TextColor ParentCallback={callback} color={titlecolor}/>
        </div>
        <div className='flexbox'>
            <h1>Font Style:</h1>
            <FontStyle ParentCallback={callbackfont} />
        </div>
        <div className='flexbox'>
            <h1>Font Size:</h1>
            <div className="slider">
                <FontSize ParentCallback={callbackSize} size={titleSize} />
            </div> 
        </div>
        
        <div className='flexbox'>
            <h1>Angle:</h1>
            <div className='slider'>
                <TextAngle ParentCallback={callbackAngle} angle={titleAngle} />
            </div>
        </div>
        <div className='flexbox'>
            <h1>Stoke :</h1>
            <Stroke />
        </div>
        
        </>
        }
    </div>
  )
}
