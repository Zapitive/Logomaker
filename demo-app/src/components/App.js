import React from "react";



class App extends React.Component{
    

    render (){
        return(
                <div>
                    <Header name="Pranay"/>
                    <Greetings />
                </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.name} !!</h1>
            </div>
        )
    }
}

class Greetings extends React.Component{
    
    

    render(){
        const date = new Date()
        const time = date.getHours()
        let timeofday

        if(time<12){
            timeofday = "Morning"
        }
        else if(12<time<4){
            timeofday = "Morning"
        }
        else{
            timeofday = "Night"
        }
        return(
            <h1>Goood {timeofday}</h1>
        )
    }
}

export default App