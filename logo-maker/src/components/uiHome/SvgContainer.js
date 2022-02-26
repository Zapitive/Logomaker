import React, { useReducer, useContext} from 'react'
import * as FontAwesome from "react-icons/fa";
import Text from 'react-svg-text';
import { AppContext } from '../../App';
import SvgIcon from './SvgIcon';

export default function SvgContainer() {
  const {title,slogan,iconname,titlePosi,titlecolor,iconPosi,bgcolor,fontStyle,sloganPosi,slogancolor} = useContext(AppContext)

    const reducer = (state,action) =>{
        switch(action.type){
          default:
            return state
        }
      }
    //   useEffect(()=>{
    //     setIconName(name)
    //     setLogoSlogan(slogan)
    //     setLogoTitle(title)
    // },[logotitle][logoslogan])
    
    const titlestyle={
      fontSize:'2em',
      fill:`rgba(${ titlecolor.r }, ${titlecolor.g }, ${ titlecolor.b }, ${ titlecolor.a })`,
      fontFamily: fontStyle
    }

    const sloganstyle={
      fill:`rgba(${slogancolor.r}, ${slogancolor.g }, ${ slogancolor.b }, ${ slogancolor.a })`
    }

    const svgstyle={
      backgroundColor:`rgba(${ bgcolor.r }, ${bgcolor.g }, ${ bgcolor.b }, ${ bgcolor.a })`,
    }
    
    
    const translate="rotate(-20 "+iconPosi.x+" " +iconPosi.y+") translate("+iconPosi.x+" " +iconPosi.y+")"

  return (
    <div id='Svg_main'>
        <svg width="400px" height="400px" style={svgstyle}>
        {iconname!=="" && 
        <g transform = {translate}>
          <SvgIcon />
        </g>}
            <Text verticalAnchor="start" x={titlePosi.x} y={titlePosi.y} style={titlestyle} >{title}</Text>
            <Text verticalAnchor="start" x={sloganPosi.x} y={sloganPosi.y} style={sloganstyle}>{slogan}</Text>
        </svg>
    </div>
  )
}
