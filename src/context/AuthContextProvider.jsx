import { useContext, useEffect, useState } from 'react'
import AuthContext from './AuthContext';
import instance from '../config/config';

export const useAuth = () =>{
     return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
   const [user,setUser] = useState(null);
   
   useEffect(() => {
  
  let isMounted = true; 

  const checkLoginStatus = async () => {
    try {
      const res = await instance.get('/users/me', {
        withCredentials: true
      });

      
      if (isMounted) {
        setUser(res.data.user);
      }
      
    } catch (error) {
      
      if (isMounted) {
        if (error.response?.status !== 401) {
           console.error("Unexpected error:", error);
        }
        setUser(null);
      }
    }
  };

  checkLoginStatus();

 
  return () => {
    isMounted = false;
  };
}, []);

  //  console.log(user)
   
  return (
    <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider