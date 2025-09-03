import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

 const [userData, setUserData] = useState(null);

 useEffect(() => {
   
     const data = getLocalStorage();
     setUserData(data);

 }, [])
 

  return (
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider