import React from 'react'

export default function ({ParentCallback}) {

    const handleChange =(e)=>{
        ParentCallback(e.target.value)
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
