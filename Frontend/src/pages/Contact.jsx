import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-16 border-t pt-14">

            {/* Page Title */}
            <div className="text-2xl text-center mb-10">
                <Title text1={'CONTACT'} text2={'US'} />
            </div>

            {/* Contact Section */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-20">

                <img
                    className="w-full md:max-w-112.5 rounded-lg"
                    src={assets.contact_img}
                    alt="contact"
                />

                <div className="flex flex-col gap-5 text-gray-700 text-sm sm:text-base">

                    <p className="text-lg font-semibold text-gray-900">
                        Our Store
                    </p>

                    <p>
                        50263 William Station <br />
                        Suite 350, Washington, USA
                    </p>

                    <p>
                        Tel: (415) 555-1023 <br />
                        Email: admin@forever.com
                    </p>

                    <p className="text-lg font-semibold text-gray-900">
                        Careers at Forever
                    </p>

                    <p>
                        Learn more about our teams and current job openings.
                        We’re always looking for talented people to join us.
                    </p>

                    <button className="w-fit border px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                        Explore Jobs
                    </button>

                </div>

            </div>

            {/* Newsletter Section */}
            <NewsletterBox />

        </div>
    )
}

export default Contact