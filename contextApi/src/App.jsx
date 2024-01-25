import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvvider'
import Login from './Login'
import Profile from './Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>New React Context</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
