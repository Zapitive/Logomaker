import React from "react";

// class State extends React.Component{
//     constructor(){
//         super()
//             this.state = {
//                 name:"pranay",
//                 age:"20"
//             }
        
//     }

//     render(){
//         return(
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <h2>I am {this.state.age} years old</h2>
//             </div>
//         )
//     }
// }

class State extends React.Component{
    constructor(){
        super()
            this.state = {
                count:0,
                Up:0,
                Down:0
            }
            this.Up10 = this.Up10.bind(this)
            this.Up = this.Up.bind(this)
            this.Down = this.Down.bind(this)
            this.Down10 = this.Down10.bind(this)
    }

    Up10(){ 
        this.setState(
            prevState =>{
                return{
                    count : prevState.count + 10,
                    Up : prevState.Up + 10
                    
                }
            }
        )
    }

    Up(){ 
        this.setState(
            prevState =>{
                return{
                    count : prevState.count + 1,
                    Up : prevState.Up + 1
                }
            }
        )
    }

    Down(){ 
        this.setState(
            prevState =>{
                return{
                    count : prevState.count - 1,
                    Down : prevState.Down - 1
                }
            }
        )
    }
    Down10(){ 
        this.setState(
            prevState =>{
                return{
                    count : prevState.count - 10,
                    Down : prevState.Down - 10
                }
            }
        )
    }
    

    render(){
        
    

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button type="button" onClick={this.Up10}>+ 10</button>
                <button type="button" onClick={this.Up}>+</button>
                <button type="button" onClick={this.Down}>-</button>
                <button type="button" onClick={this.Down10}>- 10</button>
                <h3>Added this many  {this.state.Up}</h3>
                <h3>Substracted this many  {this.state.Down}</h3>
            </div>
        )
    }
}

export default State