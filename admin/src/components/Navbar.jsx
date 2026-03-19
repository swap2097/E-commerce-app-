import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
        
        <img 
            src={assets.logo} 
            alt="logo" 
            className="w-32 cursor-pointer"
        />

        <button onClick={()=> setToken('')} className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-200">
            Logout
        </button>

        </div>
    )
}

export default Navbar