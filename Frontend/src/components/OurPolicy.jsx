import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="my-20 px-6 md:px-12 lg:px-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">

        <div className="flex flex-col items-center">
          <img
            src={assets.exchange_icon}
            alt="exchange-icon"
            className="w-12 mb-4"
          />
          <p className="font-semibold text-gray-800">
            Easy Exchange Policy
          </p>
          <p className="text-gray-500 text-sm">
            We offer hassle free exchange policy
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.quality_icon}
            alt="quality-icon"
            className="w-12 mb-4"
          />
          <p className="font-semibold text-gray-800">
            7 Days Return Policy
          </p>
          <p className="text-gray-500 text-sm">
            We provide 7 days free return policy
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assets.support_img}
            alt="support-img"
            className="w-12 mb-4"
          />
          <p className="font-semibold text-gray-800">
            Best Customer Support
          </p>
          <p className="text-gray-500 text-sm">
            We provide 24/7 customer support
          </p>
        </div>

      </div>

    </div>
  )
}

export default OurPolicy