import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import LoginPage from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import SignInPage from './pages/signInPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import ResponseTest from './pages/admin/responseTest'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary'>
     <BrowserRouter>
    <Toaster position='top-right'/>
     <Routes path="/*">
     <Route path="/*" element={<HomePage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path='/admin/*' element={<AdminHomePage/>}/>
     <Route path="/response" element={<ResponseTest/>}/>
     
     </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App
