import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setCartItems('')
        navigate('/login')
    }


    return (
    <div className="flex items-center justify-between py-5 px-6 md:px-12 font-medium relative">
        
        {/* Logo */}
        <img src={assets.logo} alt="logo" className="w-36" />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-gray-700">
        <NavLink to="/" className="hover:text-black transition">
            <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="hover:text-black transition">
            <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="hover:text-black transition">
            <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="hover:text-black transition">
            <p>CONTACT</p>
        </NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
        
        <img onClick={()=> setShowSearch(true)} src={assets.search_icon} alt="search" className="w-5 cursor-pointer" />

        {/* Profile Dropdown */}
        <div className="group relative">
            {/* <Link to='/login'> */}
            <img onClick={() => token ? null : navigate('/login')}
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
            />
            {/* </Link> */}
            { token && 
            <div className="absolute right-0 pt-4 hidden group-hover:block">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=> navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
            </div>}

            
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
            <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
            </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="menu"
            className="w-5 cursor-pointer sm:hidden"
        />
        </div>

        {/* Mobile Sidebar */}
        <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 ${
        visible ? "w-[75%]" : "w-0"
        }`}
        >
        <div className="flex flex-col text-gray-600">

        <div
        onClick={() => setVisible(false)}
        className="flex items-center gap-4 p-4 cursor-pointer"
        >
        <img src={assets.dropdown_icon} alt="back" className="h-4 rotate-180" />
        <p>Back</p>
        </div>

        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
        HOME
        </NavLink>

        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
        COLLECTION
        </NavLink>

        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
        ABOUT
        </NavLink>

        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
        CONTACT
        </NavLink>

        </div>
        </div>
    </div>
)
}

export default Navbar