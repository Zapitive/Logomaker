import React, { useContext } from 'react'
import { AppContext } from '../../../App'

export default function () {

    const {setFontStyle} = useContext(AppContext)

    const handleChange =(e)=>{
        setFontStyle(e.target.value)
    }

  return (
    <div>
        <select id="fonts" name="fontstyle" onChange={handleChange}>
        <option value="airstream">airstream</option>
        <option value="ArchitectsDaughter">Architect</option>
        <option value="alphaecho">alphaecho</option>
        <option value="Aquiline">Aquiline</option>
        <option value="atomicage">atomicage</option>
  </select>
    </div>
  )
}
