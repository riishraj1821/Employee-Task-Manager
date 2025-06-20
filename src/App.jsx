
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './contexts/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
      
    if (authData.admin.find((e) => email == e.email && password == e.password)) {
      setUser('admin')
    } else if (authData.employees.find((e) => email == e.email && password == e.password)) {
      setUser('Employee')
    } else {
      alert("Invalid Username Or Password");
    }

  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )

}
export default App;
