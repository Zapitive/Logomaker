import React from "react";
import {Link} from 'react-router-dom';




function Header(){

    const styles={
        textDecoration: 'none',
        color: 'white',
        margin: '15px'
    }
    return(
        <div id="home_header">
                <ul>
                    <Link style={styles} to="/">Home</Link>
                    <Link style={styles} to="/text">Text</Link>
                    <Link style={styles} to="/icon">Select Icon</Link>
                    <Link style={styles} to="/customize">Customize</Link>
                    <Link style={styles} to="/download">Download</Link>
                </ul>
        </div>
    )
}

export default Header