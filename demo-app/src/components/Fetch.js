import React from "react";

class Fetch extends React.Component{
    constructor(){
        super()
        this.state ={
            loading:false,
            character:{}
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch('https://swapi.dev/api/planets/4')
        .then(response => response.json())
        .then(data =>{
            this.setState({
                loading:false,
                character : data
            })
        })
    }

    render(){
        const text = this.state.loading? "loading....": this.state.character.name +" is "+ this.state.character.climate
        return(
            <div>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default Fetch