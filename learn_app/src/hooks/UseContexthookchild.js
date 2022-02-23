import React, { useContext } from 'react'
import {usecontext} from './UseContexthook'

export default function () {
    const {setState} = useContext(usecontext)
    const handleChange = (e) =>{
        setState(e.target.value)
    }

  return (
    <div>
        <input type="text" onChange={handleChange} />
    </div>
  )
}
