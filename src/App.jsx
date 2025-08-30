import React , {useState , useEffect} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Showitems from './Components/Showitems'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      
       <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/items/:query" element={<Showitems/>}/>
       </Routes>
    </div>
  )
}

export default App
 