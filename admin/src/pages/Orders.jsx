import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

    const [orders, setOrders] = useState([])

    const fetchAllOrders = async () => {
        if (!token) return null

        try {
            const response = await axios.post(
                backendUrl + '/api/order/list',
                {},
                { headers: { token } }
            )

            if (response.data.success) {
                setOrders(response.data.orders)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const statusHandler = async ( event, orderId ) => {
        try {
            const response = await axios.post(backendUrl + '/api/order/status', {orderId, status: event.target.value}, {headers: {token}})
            if(response.data.success) {
                await fetchAllOrders()
            }
        } catch (error) {
            console.log(error)
            toast.error(error.data.message)
        }

    }

    useEffect(() => {
        fetchAllOrders()
    }, [token])

    return (
        <div className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Orders Page</h3>

            <div className="flex flex-col gap-5">
                {orders.map((order, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start border p-4 rounded-lg shadow-sm bg-white"
                    >
                        {/* Icon */}
                        <img
                            src={assets.parcel_icon}
                            alt=""
                            className="w-12"
                        />

                        {/* Items */}
                        <div>
                            {order.items.map((item, i) => (
                                <p key={i} className="text-sm text-gray-700">
                                    {item.name} x {item.quantity}{' '}
                                    <span className="text-gray-500">
                                        {item.size}
                                    </span>
                                    {i !== order.items.length - 1 && ','}
                                </p>
                            ))}
                        </div>

                        {/* Address */}
                        <div className="text-sm text-gray-700">
                            <p className="font-medium">
                                {order.address.firstName} {order.address.lastName}
                            </p>
                            <p>{order.address.street},</p>
                            <p>
                                {order.address.city}, {order.address.state},{' '}
                                {order.address.country}
                            </p>
                            <p>{order.address.phone}</p>
                        </div>

                        {/* Order Details */}
                        <div className="text-sm text-gray-700">
                            <p>Items: {order.items.length}</p>
                            <p>Method: {order.paymentMethod}</p>
                            <p>
                                Payment:{' '}
                                <span className={order.payment ? 'text-green-600' : 'text-red-500'}>
                                    {order.payment ? 'Done' : 'Pending'}
                                </span>
                            </p>
                            <p>
                                Date:{' '}
                                {new Date(order.date).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Price + Status */}
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-lg">
                                {currency} {order.amount}
                            </p>

                            <select onChange={((event)=> statusHandler(event,order._id))} value={order.status} className="border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="Order Place">Order Place</option>
                                <option value="Packing">Packing</option>
                                <option value="Shipping">Shipping</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders