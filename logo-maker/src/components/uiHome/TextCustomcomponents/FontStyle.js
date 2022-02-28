import React from 'react'

export default function ({ParentCallback}) {

    const handleChange =(e)=>{
        ParentCallback(e.target.value)
    }

  return (
    <div>
        <select id="fonts" name="fontstyle" onChange={handleChange} className="classic">
        <option value="Sanserif">Sanserif</option>
        <option value="airstream">Airstream</option>
        <option value="ArchitectsDaughter">Architect</option>
        <option value="alphaecho">Alphaecho</option>
        <option value="Aquiline">Aquiline</option>
        <option value="atomicage">Atomicage</option>
        <option value="Boycott">Boycott</option>
        <option value="Edo">Edo</option>
        <option value="Tusj">Tusj</option>
        <option value="frente">Frente</option>
        <option value="JosefinSans">JosefinSans</option>
        <option value="Juice">Juice</option>
        <option value="TradeWinds">TradeWinds</option>
  </select>
    </div>
  )
}
