import React from "react";

function Joke(props){
    return(
    <div>
        <h1 style={{display: !props.question && "none"}}>Question : {props.question}</h1>
        <h2 style={{color: !props.question && "#fdca12"}}>Answer : {props.answer}</h2>
    </div>
    )
}

export default Joke