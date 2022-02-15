import React from "react";
import Product from "./components/Product";
import Productdata from "./components/Productdata";
import Todo from "./components/Todo";
import Tododata from "./components/Tododata";

// function MyApp(){
//   const products = Productdata.map(product => <Product key={product.id} p={product}/> )
//   const todos = Tododata.map(todos =><Todo key={todos.id} todo={todos.todo}/> )
//     return(
//       <div>
//         {todos}
//       </div>
//     )
//   }

  class MyApp extends React.Component{
    constructor(){
      super()
      this.state={
        todoss : Tododata
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
      this.setState(prevState =>{
        const Updatetodos = prevState.todoss.map(
          todos =>{
            if(todos.id === id){
              todos.completed = !todos.completed
            }
            return todos
          })
          return {
            todoss : Updatetodos
          }
        })
      }
    

    render(){
      const todos = this.state.todoss.map(todo =><Todo key={todo.id} p={todo} handleChange={this.handleChange}/> )
      return(
        <div>
          {todos}
        </div>
      )
    }
  }

  export default MyApp