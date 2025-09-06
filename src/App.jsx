import React , {useState , useEffect, Suspense} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Showitems from './Components/Showitems'
import  Menu  from './Components/Menu'
import Cart from './Components/Cart'
import Search from './Components/Search'
// import { lazy } from 'react'
// const Showitems = lazy(()=>import("./Components/Showitems"))
// const Menu = lazy(()=>import("./Components/Menu"))
// const Cart = lazy(()=>import("./Components/Cart"))
// const Home = lazy(()=>import("./Components/Home"))

const App = () => {
  
  return (
    <div>
      <Navbar/>
      {/* //<Suspense fallback={<Loader/>}> */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items/:query" element={<Showitems/>}/>
        <Route path='/menu/:resId' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
       </Routes>
      {/*  </Suspense> */}
    </div>
  )
}

export default App
 


// const Loader = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="w-12 h-12 border-4 border-emerald-500 border-dashed rounded-full animate-spin"></div>
//     </div>
//   );
// };



