import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext)

  return (
    <Link 
      to={`/product/${id}`} 
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
    >
      
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4">
        <p className="text-gray-800 font-medium text-lg truncate">
          {name}
        </p>

        <p className="text-green-600 font-semibold mt-1 text-lg">
          {currency}{price}
        </p>
      </div>

    </Link>
  )
}

export default ProductItem