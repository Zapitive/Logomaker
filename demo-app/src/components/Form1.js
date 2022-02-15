import React from "react";

class Form1 extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName:'',
            lastName:''
        }
        this.inputChange = this.inputChange.bind(this)
    }

    inputChange(event){
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <form>
                <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.inputChange}/>
                <br></br>
                <input type="text" name="lastName" placeholder="First Name" value={this.state.lastName} onChange={this.inputChange}/>
                <h1>{this.state.firstName}  {this.state.lastName}</h1>
            </form>
        )
    }
}

export default Form1