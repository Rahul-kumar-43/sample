import React, { useState,useEffect } from 'react';
import Axios from 'axios';
const PostAxi=()=>
{
    const[name,setName] =useState('');
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUsers(res.data))
    },[])
    const addNew=()=>
    {
        Axios.post("https://jsonplaceholder.typicode.com/users",{name:name})
            .then(res=>setUsers([...users,res.data]))
    }
    return(
        <>
        <h1>Post Axios demo</h1>
        {users.map((user)=>
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
    )}
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={addNew}>AddNew</button>
        </>
    )
}
export default PostAxi;