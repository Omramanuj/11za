import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/Login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Routes>
      <Route path="/index" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element ={<Navigate to="/index" replace/>}/>
    </Routes>

    </>
  )
}

export default App
