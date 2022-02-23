import React,{createContext, useState} from 'react'
import UseContexthookchild from './UseContexthookchild'

export const usecontext = createContext(null)

export default function UseContexthook() {
    const [state,setState] = useState("")
  return (
    <usecontext.Provider value={{setState}}>
        <h1>{state}</h1>
        <UseContexthookchild />
    </usecontext.Provider>
  )
}
