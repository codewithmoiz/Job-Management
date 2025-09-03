import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const data = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  useEffect(() => {

    if(data){
      const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (currentUser) {
        setUser(currentUser.role);
        if (currentUser.role === "employee") {
          setLoggedInUser(currentUser.employee);
        }
      }
    }

  }, [data])
  

  const handleLogin = (email, password) => {

    if(email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
      console.log(user);
    }
    else if(data){
      const employee = data.employees && data.employees.find((e) => e.email === email && e.password === password);
      if(employee){
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', employee}));
        console.log(user);
      }
    }
    else{
      console.log('Invalid Credentials');
    } 

  }

  return (
  <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard />}
    {user === 'employee' && <EmployeeDashboard data={loggedInUser} />}
  </>
)

}

export default App