import React from "react";

function Todo(props){
    const styles ={
        color:"#808080",
        fontStyle : "italic",
        textDecoration: "line-through"
    }

    return(
        <div>
            <input type="checkbox" checked={props.p.completed} onChange={() => props.handleChange(props.p.id)}/>
            <p style={props.p.completed ? styles:null }>{props.p.todo}</p>
            <hr />
        </div>
    )
}

export default Todo