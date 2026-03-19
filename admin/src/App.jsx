import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import Login from './components/Login'
import { ToastContainer, toast } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(() => {
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer />

      {
        token === ""
          ? <Login setToken={setToken} />
          :
          <>
            <Navbar setToken={setToken} />

            <div className="flex">
              
              {/* Sidebar */}
              <Sidebar />

              {/* Page Content */}
              <div className="flex-1 p-6">
                <Routes>
                  <Route path='/add' element={<Add token={token} />} />
                  <Route path='/list' element={<List token={token} />} />
                  <Route path='/orders' element={<Orders token={token} />} />
                </Routes>
              </div>

            </div>
          </>
      }

    </div>
  )
}

export default App