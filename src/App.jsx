import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import SignInPage from './pages/signInPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import FileUploadTest from './pages/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <BrowserRouter>
    <Toaster position='top-right'/>
     <Routes path="/*">
     <Route path="/*" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path='/signup' element={<UserData/>}/>
     <Route path='/admin/*' element={<AdminHomePage/>}/>
     <Route path="/testing" element={<FileUploadTest/>}/>
     </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App
