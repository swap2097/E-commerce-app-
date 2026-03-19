import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { products } from '../assets/assets'
import { ShopContext } from '../context/shopContext'
import axios from 'axios'

const Orders = () => {
    
    const { backendUrl, token, currency } = useContext(ShopContext)

    const [ orderData, setOrderData] = useState([])

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/userorders',{}, {headers: {token}})
            if (response.data.success) {
                let allOrdersItems = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItems.push(item)
                    })
                })
                setOrderData(allOrdersItems.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        loadOrderData()
    }, [token, backendUrl])

    return (
        <div className="border-t pt-14 px-4 sm:px-8 lg:px-16">

            {/* Page Title */}
            <div className="text-2xl mb-8">
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>

            {/* Orders List */}
            <div className="flex flex-col gap-6">

                {
                    orderData.map((item, index) => (
                        <div
                            key={index}
                            className="py-4 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        >

                            {/* Left Side : Product Info */}
                            <div className="flex items-start gap-6 text-sm">

                                <img
                                    className="w-16 sm:w-20 rounded"
                                    src={item.image[0]}
                                    alt=""
                                />

                                <div>

                                    <p className="text-base font-medium">
                                        {item.name}
                                    </p>

                                    <div className="flex items-center gap-6 mt-2 text-gray-700 text-sm">
                                        <p>{currency}{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size}</p>
                                    </div>

                                    <p className="mt-2 text-gray-500">
                                        Date: <span className="text-gray-700">{ new Date(item.date).toDateString()}</span>
                                    </p>
                                    <p className="mt-2 text-gray-500">
                                        Payment: <span className="text-gray-700">{item.paymentMethod}</span>
                                    </p>

                                </div>

                            </div>


                            {/* Right Side : Status + Button */}
                            <div className="flex flex-col md:items-end gap-3">

                                <div className="flex items-center gap-2 text-sm">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <p className="text-gray-600">{item.status}</p>
                                </div>

                                <button onClick={loadOrderData} className="border px-5 py-2 text-sm hover:bg-gray-100 transition">
                                    TRACK ORDER
                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Orders