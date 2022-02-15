import React from "react";

class MyAppPrac extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoggedIn : true
            
        }
        this.Change = this.Change.bind(this)
    }

    Change(){
        this.setState(prevState =>{
            return{
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Pranay is {this.state.isLoggedIn ? "Logged In":"Logged Out"}</h1>
                <button onClick={this.Change}>{this.state.isLoggedIn ? "Log out" : "Log in"}</button>
            </div>
        )
    }
}

export default MyAppPrac