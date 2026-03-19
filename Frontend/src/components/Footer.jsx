import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-20">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div>
          <img src={assets.logo} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi, laboriosam. A place where fashion meets comfort.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-4">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>+1-212-234-876</li>
            <li>contact@forveryou.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <p className="text-center text-gray-500 text-sm py-5">
          Copyright 2026 © forever.com - All Rights Reserved
        </p>
      </div>

    </div>
  )
}

export default Footer