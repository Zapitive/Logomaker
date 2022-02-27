import React from 'react'
import GameIcons from './GameIcons';
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
  "FaFemale",
  "FaGratipay",
  "FaRaspberryPi"
]

const GI = [
  "GiAk47"
]

  const listItems = iconnames.map((fa) =>
    <div className='svg_icon' key={fa}><Icongenerator name={fa} /></div>);

    const gamingItems = GI.map((gi)=>
    <div className='svg_icon' key={gi}><GameIcons name={gi}/></div>)

  return (
    <div id='icon_main'>
          {listItems}
          {gamingItems}
    </div>
  )
}