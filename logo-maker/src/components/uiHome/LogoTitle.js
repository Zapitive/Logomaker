import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../App';
import Position from './TextCustomcomponents/Position';
import TextColor from './TextCustomcomponents/TextColor';

export default function () {
    const {setTitle,setSlogan,x,y,setX,setY,title,setTitleColor,titlecolor} = useContext(AppContext)
    const titleRef = useRef(null)

    const textChange = (e)=>{
        const{name,value} = e.target
        if(name==="TitleText"){
            setTitle(value)
        }
        else{
            setSlogan(value)
        }
        
    }
    const positionChange = (e)=>{
        const values = e
        setX(values[0])
        setY(values[1])
    }
    const callback = (e)=>{
        setTitleColor(e)
    }

  return (
    <div>
        <input type="text" name='TitleText' placeholder="Logo Title" onChange={textChange} ref={titleRef} />
        {titleRef.current && <>
        <Position handleposition={positionChange} currentx={x} currenty={y} name={title}/>
        <TextColor ParentCallback={callback} color={titlecolor}/>
        </>
        }
        <input type="text" name='slogan' placeholder="Slogan" onChange={textChange}/>
    </div>
  )
}
