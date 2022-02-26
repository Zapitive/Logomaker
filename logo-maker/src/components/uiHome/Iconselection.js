import React from 'react'
import Icongenerator from './Icongenerator';



export default function Iconselection() {
  
  

  const iconnames = ["FaBimobject",
  "FaBtc",
  "FaBluetoothB",
  "FaInstagram",
  "FaPaperPlane",
  "FaShower",
  "FaShoppingCart",
  "FaThermometerThreeQuarters",
  "FaTaxi",
  "FaTools",
  "FaRegGem",
  "FaGalacticRepublic",
  "FaYinYang",
  "FaRegSnowflake",
  "FaRegFutbol",
  "FaJedi",
  "FaApple",
  "FaTeamspeak",
  "FaFemale"
]
  const listItems = iconnames.map((number) =>
    <div className='svg_icon' key={number}><Icongenerator name={number} /></div>);

  return (
    <div id='icon_main'>
          {listItems}
    </div>
  )
}