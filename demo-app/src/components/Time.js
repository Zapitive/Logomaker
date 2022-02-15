import React from "react";

function Time(){
    const date = new Date(2021,3,2);
    const month = date.getMonth
    const styles ={
        color : "#f12456"
    }
    let season
    if(month <= 3){
        season = "winter"
    }
    else if(3 < month && month <= 5){
        season = "summer"
    }
    else{
        season = "rainy"
        styles.color = "#00cd24"
    }
    return(
        <h1 style={styles}>Happy {season}</h1>
    )
}

export default Time