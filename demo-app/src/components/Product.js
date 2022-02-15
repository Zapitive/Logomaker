import React from "react";

function Product(props){

    return(
        <div>
            <h1>Name: {props.p.name}</h1>
            <h3>price:{props.p.price}</h3>
            <p>description: {props.p.decription}</p>
        </div>
    )
}

export default Product