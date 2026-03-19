import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
    return (
        <div className="flex flex-col gap-16 sm:gap-20">

            {/* Hero Section */}
            <section>
                <Hero />
            </section>

            {/* Latest Collection */}
            <section className="px-4 sm:px-8 lg:px-12">
                <LatestCollection />
            </section>

            {/* Best Seller */}
            <section className="px-4 sm:px-8 lg:px-12">
                <BestSeller />
            </section>

            {/* Store Policies */}
            <section className="px-4 sm:px-8 lg:px-12">
                <OurPolicy />
            </section>

            {/* Newsletter */}
            <section className="px-4 sm:px-8 lg:px-12 pb-16">
                <NewsletterBox />
            </section>

        </div>
    )
}

export default Home