import React,{useContext} from 'react'

export default function Position({handleposition,currentx,currenty,name}) {
    const values =[currentx,currenty]

    const handleClick = (e)=>{
      const{name} = e.target
      if(name==='Left'){
        values[0] = values[0] - 5;
      }
      else if(name==='Right'){
        values[0] = values[0] + 5;
      }
      else if(name==='Up'){
        values[1] = values[1] - 5;
      }
      else if(name==='Down'){
        values[1] = values[1] + 5;
      }
      handleposition(values)
    }
  
   
  
    return (
      <div className='customizeposi'>
        <button name='Up' className='Up ' onClick={handleClick}>Up</button>
        <br />
        <button name='Left' className='Left' onClick={handleClick}>Left</button>
        <span className='position_span'>{name}</span>
        <button name='Right' className='Right' onClick={handleClick}>Right</button>
        <br />
        <button name='Down' className='Down'  onClick={handleClick}>Down</button>
      </div>
    )
}
