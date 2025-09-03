import React , {useState , useEffect} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Showitems from './Components/Showitems'
import  Menu  from './Components/Menu'
import Cart from './Components/Cart'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      
       <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/items/:query" element={<Showitems/>}/>
        <Route path='/menu/:resId' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </div>
  )
}

export default App
 