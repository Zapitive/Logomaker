import React,{useEffect, useState} from "react"
import axios from "axios"

function UseEffecthook() {

const[data,setData]=useState("")
const[count,setCount]=useState(0)

useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
        setData(response.data[count].email)
        console.log(response.data[count].email)
    }
        );
},[count])

const ChangeEmail = () =>{
    setCount(count + 1)
}
  return (
    <div>
        <h1>Email :- {data}</h1>
        <button onClick={ChangeEmail}>Random Email</button>
    </div>
  );
}

export default UseEffecthook;
