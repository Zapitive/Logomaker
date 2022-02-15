import React,{useReducer} from "react"

function App() {

  const reducer = (state,action) =>{
    switch(action.type){
      case "increment":
        return{count:state.count+1,showText:state.showText}
      case "toggleText":
        return {count:state.count,showText:!state.showText}
      default:
        return state
    }
  }

  const [state,dispatch] = useReducer(reducer,{count:0,showText:true})
  return (
    <div>
      {state.count}
      <button onClick={()=>{
        dispatch({type:"increment"})
        dispatch({type :"toggleText"})
      }}>Increment</button>
      <h1>{state.showText && "Is this visible ?"}</h1>
    </div>
  );
}

export default App;
