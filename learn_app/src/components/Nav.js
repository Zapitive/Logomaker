import React from "react";
import {Link} from "react-router-dom"
function Nav(){
return(
    <div>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop</Link>
            </ul>
        </nav>
    </div>
)
}

export default Nav;