import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'




const Navbar = () => {
  const navigate = useNavigate()
  const cartData = useSelector((Store)=> Store.cart)
  let ans = 0;
  for(let item of cartData){
    ans += item.quantity
  }
  
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-500 to-yellow-400 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F08%2FFresh-food-logo-design-on-transparent-background-PNG.png&w=3840&q=75"
          alt="Logo"
          className="h-12 w-12 rounded-full shadow-lg"
        />
        <span className="text-white text-xl font-bold font-serif">Fresh Food</span>
      </div>
         

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">

        <Link
          to="/"
          className="text-white hover:text-yellow-100 font-medium transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-yellow-100 font-medium transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/menu"
          className="text-white hover:text-yellow-100 font-medium transition-colors duration-300"
        >
          Menu
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-yellow-100 font-medium transition-colors duration-300"
        >
          Contact
        </Link>
        <Link
          to="/order"
          className="text-white hover:text-yellow-100 font-medium transition-colors duration-300"
        >
          Order
        </Link>
        <Link
          to="/search"
          className="text-white hover:text-yellow-100 font-medium transition-colors duration-300"
        >
          🔍Search
        </Link>

        <div className="relative">
        <Link to='/cart' className='text-white hover:text-orange-200 transition duration-300 flex items-center'>
          <span className="text-2xl">🛒</span>
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
             {ans}
          </div>
        </Link>
      </div> 
      </div>
    </div>
  )
}

export default Navbar
