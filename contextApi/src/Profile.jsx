import React, {useContext} from 'react'
import UserContext from './context/Usercontext'
const Profile = () => {
    const {user}= useContext(useContext)
   if(!user)
   return <div>Please login</div>
   return <div>Welcome {user.username}</div>
}

export default Profile