import React, { useContext } from 'react'
import { AppContext } from '../../App';

export default function () {
    const {setTitle,setSlogan} = useContext(AppContext)

    

    const textChange = (e)=>{
        const{name,value} = e.target
        if(name==="TitleText"){
            setTitle(value)
        }
        else{
            setSlogan(value)
        }
        
    }


  return (
    <div>
        <input type="text" name='TitleText' placeholder="Logo Title" onChange={textChange}/>
        <input type="text" name='slogan' placeholder="Slogan" onChange={textChange}/>
    </div>
  )
}
