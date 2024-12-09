import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Create() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    let navigate = useNavigate();
    const handleSubmit = () => {
        axios.post("https://67528de7d1983b9597b689d1.mockapi.io/crud-app/crud-project",{
        name:name , email:email
        }).then(()=>{
            
            navigate('/read')
        })
  }
  return (
    <div className='createCard'>
      <div className='inputDiv'>
        <h2>Add your Details</h2>
        <label className='label'>Name:</label>
        <input className='inputTag' type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className='inputDiv'>
        <label className='label'>Email:</label>
        <input className='inputTag' type="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <button className='submitButton' type="Submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Create