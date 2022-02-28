import React from "react";
import {Link} from 'react-router-dom';




function Header(){

    const ulstyle={
        "position":"absolute",
        "top":"3%","left":"50%",
        "width":"800px",
        "transform":"translateX(-50%)",
        "margin":"0",
        "padding":"20px 0",
        "background":"#79A7D3",
        "display":"flex",
        "borderRadius":"10px",
        "boxShadow":"0 10px 30px rgba(0,0,0,0.3)"
    }

    const styles={
        "listStyle":"none",
        "textAlign":"center",
        "display":"block",
        "fontSize":"1.25em",
        "borderRight":"1px solid rgba(0, 0, 0, 0.2)",
        textDecoration: "none",
        padding: "0 50px",
        display: "block"
    }

    const lastchild={
        "listStyle":"none",
        "textAlign":"center",
        "display":"block",
        "fontSize": "1.25em",
        textDecoration: "none",
        padding: "0 50px",
        display: "block"
    }
    return(
        <div id="home_header">
                <ul>
                    <Link  className="nav_link" to="/">Home</Link>
                    <Link  className="nav_link" to="/text">Text</Link>
                    <Link  className="nav_link" to="/icon">Select Icon</Link>
                    <Link  className="nav_link" to="/customize">Customize</Link>
                    <Link  className="nav_link" to="/download">Download</Link>
                </ul>
        </div>
    )
}

export default Header