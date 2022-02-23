import React, { useReducer, useEffect, useContext} from 'react'
import * as FontAwesome from "react-icons/fa";
import Text from 'react-svg-text';
import { AppContext } from '../../App';

export default function SvgContainer() {
  const {title,slogan,iconname} = useContext(AppContext)

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
    
       const handleIconClick = (e)=>{
           e.preventDefault()
          
      }

    
    const [state,dispatch] = useReducer(reducer,{color:"#f001f4",fontSize:"120"})
    
 
    const icon = React.createElement(FontAwesome[iconname],
        {style: {fontSize: state.fontSize,color: state.color},
        onClick: handleIconClick
    });

    // const Icon = (props) => {
    //     const { iconName, size, color } = props;
    //     const icon = React.createElement(FontAwesome[iconName]);
    //     return <div style={{ fontSize: size, color: color }} >{icon}</div>;
    //   };

      

  return (
    <div id='Svg_main'>
        <svg width="500px" height="500px" >
            {iconname!=="" && icon}
            <Text verticalAnchor="start">{title}</Text>
            <Text verticalAnchor="start" x={170} y={175}>{slogan}</Text>
        </svg>
    </div>
  )
}
