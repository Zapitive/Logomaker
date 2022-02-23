import React, { useReducer, useState } from 'react'

export default function ({parentCallback}) {

    const[inputValues,setInputValues]=useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { TitleText:'', slogan: ''}
    )

    const textChange = (e)=>{
        const { name, value } = e.target;
        setInputValues({ [name]: value });
    }

    const handleSubmit = (e)=>{
        const titleText = inputValues.TitleText,slogan=inputValues.slogan
        const types = [titleText,slogan]
        parentCallback(types)
    }

  return (
    <div>
        <input type="text" name='TitleText' placeholder="Logo Title" onChange={textChange}/>
        <input type="text" name='slogan' placeholder="Slogan" onChange={textChange}/>
        <input type="button" value="Submit" onClick={handleSubmit}/>
    </div>
  )
}
