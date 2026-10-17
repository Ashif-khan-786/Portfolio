import React from 'react'

import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'


const App = () => {
  return (
    
    <div className='h-screen w-full bg-black bg-cover '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> 
      
    </div>
  )
}

export default App


