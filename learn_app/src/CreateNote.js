import React,{useState} from 'react'
import { notesRef } from './firebase'

export default function CreateNote() {

    const [note,setNote] = useState("")

    const createNote = (e) =>{
        e.preventDefault()
        const items ={
            task:note,
            done:false
        }
        notesRef(items)
        setNote("")
    }

    const handleChange = (e)=>{
        setNote(e.target.value)
    }

  return (
    <div>
        <form onSubmit={createNote}>
            <input type="text" value={note} onChange={handleChange} placeholder="Create a Note"/>
        </form>
    </div>
  )
}
