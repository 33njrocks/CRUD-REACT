import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Read() {

    const [data,setData] = useState([])
    const getData = ()=> {
        axios.get("https://67528de7d1983b9597b689d1.mockapi.io/crud-app/crud-project")
        .then((res)=>{setData(res.data)})
    }

    const deleteData = (id) =>{
        axios.delete(`https://67528de7d1983b9597b689d1.mockapi.io/crud-app/crud-project/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setLocalStorage = (item) =>{
        localStorage.setItem('userData',JSON.stringify(item))
    }

    useEffect(()=>{
        getData();
    },[])

    
  return (
    <div>
        <Link to={"/"}><button className='submitButton tablecreate' type="Submit">Create</button></Link>
        <table className='table'>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th> 
                    <th>Edit</th>
                    <th>Delete</th> 
                </tr>
                {data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={"/update"}><button className='update' onClick={()=>{setLocalStorage(item)}}>Update</button></Link>
                            </td>
                            <td><button className='delete' onClick={()=>{deleteData(item.id)}}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Read