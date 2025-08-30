import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
      <div className="flex gap-6">
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
      </div>
    </div>
  )
}

export default Navbar
