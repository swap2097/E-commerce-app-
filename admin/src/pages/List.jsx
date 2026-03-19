import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

    const [list, setList] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(
                backendUrl + '/api/product/remove',
                { id },
                { headers: { token } }
            )

            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList()
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className="p-6 w-full">

            <p className="text-2xl font-semibold mb-6">All Products List</p>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">

                {/* Table Header */}
                <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr] bg-gray-100 p-4 font-semibold text-gray-700 border-b">
                    <p>Image</p>
                    <p>Name</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p className="text-center">Action</p>
                </div>

                {/* Product List */}
                {
                    list.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr] items-center p-4 border-b hover:bg-gray-50 transition"
                        >

                            <img
                                src={item.image[0]}
                                alt=""
                                className="w-14 h-14 object-cover rounded"
                            />

                            <p className="text-gray-700">{item.name}</p>

                            <p className="text-gray-600">{item.category}</p>

                            <p className="font-medium">
                                {currency}{item.price}
                            </p>

                            <button
                                onClick={() => removeProduct(item._id)}
                                className="text-red-500 hover:text-red-700 font-bold text-lg"
                            >
                                ✕
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default List