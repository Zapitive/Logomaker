import React from "react";

class FormPrac extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            location:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleChange}> 
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.handleChange}/><br />
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.handleChange}/><br />
                    <input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange}/><br />
                    <br />
                    <br />
                    <input type="radio" name="gender" value="male" onChange={this.handleChange}/>male
                    <input type="radio" name="gender" value="female" onChange={this.handleChange}/>female
                    <br/>
                    <select name="location" value={this.state.location} onChange={this.handleChange}>
                        <option  value="mumbai">mumbai</option>
                        <option  value="mira road">mira road</option>
                        <option  value="malad">malad</option>
                        <option  value="indore">indore</option>
                    </select>
                    <br/>
                    <br/>
                    <button >Submit</button>
                </form>

                <h1>Name : {this.state.firstName} {this.state.lastName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Gender: {this.state.gender}</h3>
                <h4>Location: {this.state.location}</h4>
            </div>
        )
    }
}

export default FormPrac