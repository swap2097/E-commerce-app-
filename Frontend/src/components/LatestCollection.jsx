import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)


  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])


  return (
    <div className="my-16 px-4 md:px-10 lg:px-16">

      {/* Title Section */}
      <div className="text-center mb-10">
        <Title text1={'LATEST'} text2={'COLLECTION'} />

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover our newest arrivals crafted with style and comfort in mind. 
          Fresh designs, modern trends, and pieces you’ll want to wear every day.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection