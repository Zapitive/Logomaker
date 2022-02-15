import React from "react";
import Conditional from "./components/Conditional";

class ConditionalApp extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading : true,
            messages : ["A"]
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState(
                {
                    isLoading :false
                }
            )
        },1500)
    }

    render(){
        return(
            <div>
                {this.state.isLoading ? <h1>Loading.....</h1> : this.state.messages.length > 0 && 
                <h1>You have {this.state.messages.length} unread messages</h1> }
            </div>
        )
    }
}
export default ConditionalApp