import React, { useReducer, useContext} from 'react'
import * as FontAwesome from "react-icons/fa";
import Text from 'react-svg-text';
import { AppContext } from '../../App';

export default function SvgContainer() {
  const {title,slogan,iconname,x,y,titlecolor} = useContext(AppContext)

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
      fill:`rgba(${ titlecolor.r }, ${titlecolor.g }, ${ titlecolor.b }, ${ titlecolor.a })`
    }
       const handleIconClick = (e)=>{
           e.preventDefault()
          
      }

    
    const [state,dispatch] = useReducer(reducer,{color:"#f001f4",fontSize:"120"})
    
 
    const icon = React.createElement(FontAwesome[iconname || "FaApple"],
        {style: {fontSize: state.fontSize,color: state.color},
        onClick: handleIconClick
    });

      

  return (
    <div id='Svg_main'>
        <svg width="500px" height="500px" >
            {iconname!=="" && icon}
            <Text verticalAnchor="start" x={x} y={y} style={titlestyle} >{title}</Text>
            <Text verticalAnchor="start" x={170} y={175}>{slogan}</Text>
        </svg>
    </div>
  )
}
