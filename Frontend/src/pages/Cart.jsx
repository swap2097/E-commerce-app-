import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

function Cart() {
    
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)

    const [cartData, setCartData] = useState([])

    useEffect(() => {

        const tempData = []

        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }

        setCartData(tempData)

    }, [cartItems])

    return (
        <div className="border-t pt-14 px-4 sm:px-8 lg:px-16">

            <div className="text-2xl mb-8">
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            {/* Cart Items */}
            <div>

                {
                    cartData.map((item, index) => {

                        const productData = products.find((product) => product._id === item._id)

                        return (
                            <div
                                key={index}
                                className="py-4 border-b grid grid-cols-[4fr_1fr_0.5fr] items-center gap-4"
                            >

                                {/* Product Info */}
                                <div className="flex items-start gap-6">

                                    <img
                                        className="w-20 sm:w-24 rounded"
                                        src={productData.image[0]}
                                        alt=""
                                    />

                                    <div>
                                        <p className="text-sm sm:text-lg font-medium">
                                            {productData.name}
                                        </p>

                                        <div className="flex items-center gap-5 mt-2 text-sm text-gray-700">

                                            <p>{currency}{productData.price}</p>

                                            <p className="px-2 sm:px-3 sm:py-1 border bg-gray-50">
                                                {item.size}
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                {/* Quantity */}
                                <input
                                    className="border max-w-16 px-2 py-1 text-center"
                                    onChange={(e) =>
                                        e.target.value === '' || e.target.value === '0'
                                            ? null
                                            : updateQuantity(item._id, item.size, Number(e.target.value))
                                    }
                                    type="number"
                                    min={1}
                                    defaultValue={item.quantity}
                                />

                                {/* Delete Icon */}
                                <img
                                    onClick={() => updateQuantity(item._id, item.size, 0)}
                                    className="w-4 mr-4 sm:w-5 cursor-pointer"
                                    src={assets.bin_icon}
                                    alt=""
                                />

                            </div>
                        )
                    })
                }

            </div>

            {/* Cart Total Section */}
            <div className="flex justify-end my-20">

                <div className="w-full sm:w-[450px]">

                    <CartTotal />

                    <div className="w-full text-end">
                        <button
                            onClick={() => navigate('/place-order')}
                            className="bg-black text-white text-sm px-8 py-3 mt-8 hover:bg-gray-800 transition"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Cart