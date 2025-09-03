import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { AuthContext } from './context/AuthProvider';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';

const App = () => {
  
  const data = useContext(AuthContext);
    const [user, setUser] = useState(null);
    console.log(data[0]);
    console.log(data[1]);

    const employees = data[0] || [];
    const admin = data[1] || [];
  
    const allUsers = [...employees, ...admin];

    const handleLogin = (email, password) => {

      const currentUser = allUsers.find((e) => e.email === email && e.password === password);     
      
      if(currentUser && currentUser.user === "admin"){
        setUser(currentUser);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      else if(currentUser && currentUser.user === "employee"){
        setUser(currentUser);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      else{
        setUser(null);
        alert("Invalid credentials");
      }

    }

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));
      setUser(storedUser);
    }, [])
    
    

  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} />) : user.user === "admin" ? (
        <AdminDashboard user={user} />
      ) : (
        <EmployeeDashboard user={user} />
      )}

    </>
  )
}

export default App