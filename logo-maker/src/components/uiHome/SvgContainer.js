import React, { useReducer, useContext} from 'react'
import Text from 'react-svg-text';
import { AppContext } from '../../App';
import SvgIcon from './SvgIcon';

export default function SvgContainer() {
  const {title,slogan,iconname,titlePosi,titlecolor,iconPosi,bgcolor,fontStyle,sloganPosi,slogancolor,
    sloganfontStyle,titleSize,titleAngle,titleStrokeWidth,titleStrokeColor,titleStroke,sloganStroke,
    sloganStrokeColor,sloganStrokeWidth,sloganSize,sloganAngle
  } = useContext(AppContext)

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
      fontSize:titleSize,
      fill:`rgba(${ titlecolor.r }, ${titlecolor.g }, ${ titlecolor.b }, ${ titlecolor.a })`,
      fontFamily: fontStyle,
      stroke:titleStroke &&`rgba(${ titleStrokeColor.r }, ${titleStrokeColor.g }, ${ titleStrokeColor.b }, ${ titleStrokeColor.a })`,
      strokeWidth: titleStroke && titleStrokeWidth
    }

    const sloganstyle={
      fontSize:sloganSize,
      fill:`rgba(${slogancolor.r}, ${slogancolor.g }, ${ slogancolor.b }, ${ slogancolor.a })`,
      fontFamily: sloganfontStyle,
      stroke:sloganStroke &&`rgba(${ sloganStrokeColor.r }, ${sloganStrokeColor.g }, ${ sloganStrokeColor.b }, ${ sloganStrokeColor.a })`,
      strokeWidth: sloganStroke && sloganStrokeWidth
    }

    const svgstyle={
      backgroundColor:`rgba(${ bgcolor.r }, ${bgcolor.g }, ${ bgcolor.b }, ${ bgcolor.a })`,
    }
    
    
    const translate="translate("+iconPosi.x+" " +iconPosi.y+")"

  return (
    <div id='Svg_main'>
        <svg id='logo_svg' viewBox="0 0 400 400" style={svgstyle}>
        {iconname!=="" && 
        <g transform = {translate}>
          <SvgIcon />
        </g>}
            <Text verticalAnchor="start" x={titlePosi.x} y={titlePosi.y} angle={titleAngle} style={titlestyle} >{title}</Text>
            <Text verticalAnchor="start" x={sloganPosi.x} y={sloganPosi.y} angle={sloganAngle} style={sloganstyle}>{slogan}</Text>
        </svg>
    </div>
  )
}
