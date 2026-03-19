import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const [currentState, setCurrentState] = useState('sign Up')
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (currentState === 'sign Up') {

                const response = await axios.post(backendUrl + '/api/user/register', {name,email,password})
                if(response.data.token) {
                    setToken(response.data.token)
                } else {
                    toast.error(response.data.message)
                }

            } else {
                const response = await axios.post(backendUrl + '/api/user/login', {email, password})
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }

            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=> {
        if(token) {
            navigate('/')
        }

    },[token])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <form
                onSubmit={onSubmitHandler}
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col gap-4"
            >

                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                    <p className="text-2xl font-semibold">{currentState}</p>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Name (only for signup) */}
                {currentState === 'Login' ? null : (
                    <input onChange={(e) => setName(e.target.value)} value={name}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        type="text"
                        placeholder="Name"
                        required
                    />
                )}

                {/* Email */}
                <input onChange={(e) => setEmail(e.target.value)} value={email}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    type="email"
                    placeholder="Email"
                    required
                />

                {/* Password */}
                <input onChange={(e) => setPassword(e.target.value)} value={password}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    type="password"
                    placeholder="Password"
                    required
                />

                {/* Links */}
                <div className="flex justify-between text-sm text-gray-600">
                    <p className="cursor-pointer hover:underline">
                        Forgot your password?
                    </p>

                    {
                        currentState === 'Login'
                            ? <p
                                onClick={() => setCurrentState('Sign Up')}
                                className="cursor-pointer hover:underline"
                                >
                                    Create account
                                </p>
                                : <p
                                    onClick={() => setCurrentState('Login')}
                                    className="cursor-pointer hover:underline"
                                >
                                    Login here
                                </p>
                    }
                </div>

                {/* Button */}
                <button
                    className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                </button>

            </form>

        </div>
    )
}

export default Login