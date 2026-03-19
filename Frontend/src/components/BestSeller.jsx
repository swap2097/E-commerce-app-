import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter(item => item.bestseller)
        setBestSeller(bestProduct.slice(0,5))
    }, [products])


    return (
        <div className="my-20 px-4 md:px-10 lg:px-16">

        <div className="text-center mb-10">
            <Title text1={'BEST'} text2={'SELLERS'} />

            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Our most loved products picked by customers.
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {bestSeller.map((item, index)=>(
            <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
            />
            ))}
        </div>

        </div>
    )
}

export default BestSeller