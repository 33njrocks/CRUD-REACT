import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function UpdatedData() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [id,setId] = useState("")
    let navigate = useNavigate();
    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://67528de7d1983b9597b689d1.mockapi.io/crud-app/crud-project/${id}`,{
            name : name , email : email
        }).then(()=>{
            navigate('/read')
        })
    }
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('userData'))
        setName(data.name);setEmail(data.email);setId(data.id)
    },[])
    return (
        <div  className='createCard'>
          <div className='inputDiv'>
            <h2>Update your Details</h2>
            <label className='label'>Name:</label>
            <input  className='inputTag' type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className='inputDiv'>
            <label className='label'>Email:</label>
            <input className='inputTag' type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <button className='submitButton' type="Submit" onClick={handleUpdate}>Update</button>
        </div>
      )
}

export default UpdatedData