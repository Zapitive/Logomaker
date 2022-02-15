import React, { useEffect, useRef, useState } from "react";

function Home(){

    const [data,setData]=useState("")
    const inputRef = useRef(null)

    useEffect(()=>{
        console.log(data)
    },[data])

    const handleClick = () =>{
        setData(inputRef.current.value)
    }

return(
    <div>
        <h1>Home Page</h1>
        <input type="text" placeholder="Type something" ref={inputRef}/>
        <button onClick={handleClick}>Change</button>
    </div>
)
}

export default Home;