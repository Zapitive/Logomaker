import React,{useReducer, useState} from 'react'
import * as FontAwesome from "react-icons/fa";
import Icongenerator from './Icongenerator';



export default function Iconselection({grandParentCallback}) {
  
  const [icon,setIcon] = useState("")

  const callback = (iconname) =>{
    setIcon(iconname)
    // console.log(iconname)
    grandParentCallback(iconname)
  }

  const iconnames = ["FaBimobject",
  "FaBtc",
  "FaBluetoothB",
  "FaInstagram",
  "FaPaperPlane",
  "FaShower",
  "FaShoppingCart",
  "FaThermometerThreeQuarters",
  "FaTaxi",
  "FaTools"
]
  const listItems = iconnames.map((number) =>
    <div className='svg_icon' key={number}><Icongenerator name={number} parentCallback={callback}/></div>);

  return (
    <div id='icon_main'>
          {listItems}
    </div>
  )
}