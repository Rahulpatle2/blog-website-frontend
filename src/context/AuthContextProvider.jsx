import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './AuthContext';
import Cookies from 'js-cookie';
import instance from '../config/config';

export const useAuth = () =>{
     return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
   const [user,setUser] = useState(null);
   
   useEffect(() =>{
     
    
      const isLoggedIn = async() =>{
        
          try {
            const res = await instance.get('/users/me',
              {
                withCredentials:true
              }
            )
      
            console.log(res.data.user)
            
            setUser(res.data.user);
          } catch (error) {
             if(error){
               console.log("Not logged in or Error:", error.response?.data?.message || error.message);
             }
             setUser(null)
          }
        
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