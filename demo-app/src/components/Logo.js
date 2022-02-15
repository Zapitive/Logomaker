import React from "react";

function Logo(props){
    return(
        <div>
            <svg height="210" width="400"><path fill={props.logo.fill}  d={props.logo.path} /></svg>
            <h1>{props.logo.name}</h1>
            <p>title: {props.logo.title}</p>
        </div>
    )
}

export default Logo 