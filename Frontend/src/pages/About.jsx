import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 border-t pt-14">

            {/* ABOUT US */}
            <div className="text-2xl text-center mb-10">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center mb-16">

                <img
                    className="w-full md:max-w-[450px] rounded-lg"
                    src={assets.about_img}
                    alt="about"
                />

                <div className="flex flex-col gap-5 text-gray-700 text-sm sm:text-base">

                    <p>
                        Welcome to our store, where style meets convenience. We are dedicated to bringing you a carefully curated selection of products that combine quality, affordability, and modern design. Our goal is to make online shopping simple, enjoyable, and reliable for everyone.
                    </p>

                    <p>
                        Since our beginning, we have focused on creating a platform where customers can discover products they love while enjoying a seamless shopping experience. From browsing collections to secure checkout and fast delivery, every step is designed with the customer in mind.
                    </p>

                    <b className="text-gray-900 text-lg">Our Mission</b>

                    <p>
                        Our mission is to provide high-quality products while building a trustworthy relationship with our customers. We aim to deliver exceptional value through carefully selected products, transparent pricing, and excellent customer support.
                    </p>

                </div>

            </div>


            {/* WHY CHOOSE US */}
            <div className="text-2xl text-center mb-10">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-sm">

                <div className="border p-6 rounded-lg hover:shadow-md transition">
                    <b className="block mb-3 text-base">Quality Assurance</b>
                    <p className="text-gray-600">
                        Every product in our collection is carefully selected and reviewed to ensure it meets our high standards of quality, durability, and design. We believe our customers deserve only the best.
                    </p>
                </div>

                <div className="border p-6 rounded-lg hover:shadow-md transition">
                    <b className="block mb-3 text-base">Convenience</b>
                    <p className="text-gray-600">
                        Our platform is designed to make shopping effortless. With an easy-to-use interface, secure payment methods, and reliable delivery services, you can shop confidently from anywhere.
                    </p>
                </div>

                <div className="border p-6 rounded-lg hover:shadow-md transition">
                    <b className="block mb-3 text-base">Exceptional Customer Service</b>
                    <p className="text-gray-600">
                        Customer satisfaction is at the heart of everything we do. Our support team is always ready to help with questions, orders, and returns to ensure a smooth shopping experience.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About