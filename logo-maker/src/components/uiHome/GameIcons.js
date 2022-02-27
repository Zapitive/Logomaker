import * as GI from "react-icons/gi";
import React,{useReducer,useContext} from "react";
import { AppContext } from "../../App";

export default function GameIcons({name}) {

    const{setIconname} = useContext(AppContext)

    const reducer = (state,action) =>{
      switch(action.type){
        default:
          return state
      }
    }
  
    const onIconClick = ()=>{
      setIconname(name)
  }
  
    const [state,dispatch] = useReducer(reducer,{color:"#EED971FF",fontSize:"80"})
    const icon = React.createElement(GI[name],{style: {fontSize: state.fontSize,color: state.color},onClick: onIconClick})
  
  
  
    return (
      <>
      {icon}
      </>
      
    )
}
