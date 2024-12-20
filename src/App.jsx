import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>

     <Routes path="/*">
     <Route path="/" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/*" element={<h1>404 error</h1>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
