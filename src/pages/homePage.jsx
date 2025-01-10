import {  Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';


export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh)]'>
      <Routes path="/*">
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/login" element={<LoginPage/>}/>
      
      </Routes>
      </div>
    </div> 

  );
}


