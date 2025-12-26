import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './AuthContext';
import Cookies from 'js-cookie';
import instance from '../config/config';

export const useAuth = () =>{
     return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
   const [user,setUser] = useState(false);
   
   useEffect(() =>{
     
    const isLoggedIn = async() =>{
      
        const res = await instance.get('/users/me',
          {
            withCredentials:true
          }
        )
  
        console.log(res.data)
        
        setUser(res.data)
      
    }
    isLoggedIn()
   },[]);

   console.log(user)
   
  return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider