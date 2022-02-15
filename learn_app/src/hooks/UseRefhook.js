import React,{useEffect, useRef, useState} from "react"
import axios from "axios"

function UseRefhook() {

const inputRef=useRef(null)

const Consoleref = () =>{
    console.log(inputRef.current.value)
}

const Clear = () =>{
    inputRef.current.value = ""
}

const Focus = () =>{
    inputRef.current.focus()
}

  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={Consoleref}>Console</button>
        <button onClick={Clear}>Clear</button>
        <button onClick={Focus}>Focus</button>
    </div>
  );
}

export default UseRefhook;
