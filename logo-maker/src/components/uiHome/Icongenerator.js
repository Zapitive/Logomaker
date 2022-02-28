import React, { useContext, useReducer } from 'react'
import * as FontAwesome from "react-icons/fa";
import { AppContext } from '../../App';



export default function Icongenerator({name}) {

  const{setIconname} = useContext(AppContext)

  const reducer = (state,action) =>{
    switch(action.type){
      case "hover":
          return{color:"#00bcd4",fontSize:"70"}
      case "hoverend":
          return{color:"#FCEDDA",fontSize:"80"}
      default:
        return state
    }
  }

  const onIconClick = ()=>{
    setIconname(name)
    
}

const handleHover = (e) =>{
  dispatch({type:"hover"})
}

const hoverEnd = ()=>{
  dispatch({type:"hoverend"})
}

  const [state,dispatch] = useReducer(reducer,{color:"#FCEDDA",fontSize:"80"})
  const icon = React.createElement(FontAwesome[name],{style: {fontSize: state.fontSize,color: state.color},onClick: onIconClick,onMouseOver:handleHover , onMouseLeave:hoverEnd})



  return (
    <>
    {icon}
    </>
    
  )
}
