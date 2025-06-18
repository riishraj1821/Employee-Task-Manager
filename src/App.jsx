
import { useEffect } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { setLocalStorage } from './Utils/localStorage'

function App() {

  useEffect(() => {
    setLocalStorage()
  }, [])
  

  return (
    <>
     <Login />
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
    </>
  )
}

export default App
