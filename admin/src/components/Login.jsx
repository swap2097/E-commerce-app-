import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
        e.preventDefault()
        const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
        if (response.data.success) {
            setToken(response.data.token)
        } else {
            toast.error(response.data.message)
        }
        } catch (error) {
        console.log(error)
        toast.error(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <form
            onSubmit={onSubmitHandler}
            className="bg-white p-8 rounded-lg shadow-md w-[350px]"
        >

            <h1 className="text-2xl font-semibold mb-6 text-center">
            Admin Panel
            </h1>

            <div className="mb-4">
            <p className="text-sm mb-1 text-gray-600">Email Address</p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-black"
            />
            </div>

            <div className="mb-6">
            <p className="text-sm mb-1 text-gray-600">Password</p>
            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-black"
            />
            </div>

            <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
            Login
            </button>

        </form>

        </div>
    )
}

export default Login