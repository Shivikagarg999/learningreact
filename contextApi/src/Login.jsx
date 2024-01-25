import React, { useState } from 'react'
import UserContext from './context/Usercontext'
import { useContext } from 'react'
function Login (){
    const [username,SetUsername]= useState('')
    const [password,Setpassword]= useState('')
    const {setUser}= useContext(useContext)
   const handlesubmit=(e)=>{
     e.preventDefault()
     setUser({username,password})
   }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='Enter your name or email'
      value={username}
      onChange={(e)=>{SetUsername(e.target.value)}}
      ></input>
      <input type='text' placeholder='Enter password'
      value={password}
      onChange={(e)=>{Setpassword(e.target.value)}}
      ></input>
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
