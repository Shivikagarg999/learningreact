import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider=(children)=>{
    const [user,SetUser]= useState(null)
   return(
    <UserContextProvider value={{user,SetUser}}>
        {children}
    </UserContextProvider>
   )
}
export default  UserContextProvider