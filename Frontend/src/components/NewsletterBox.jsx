import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="text-center py-16 px-4">

      <p className="text-2xl md:text-3xl font-semibold text-gray-800">
        Subscribe now & get 20% off
      </p>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <form 
        onSubmit={onSubmitHandler}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
        >
          SUBSCRIBE
        </button>
      </form>

    </div>
  )
}

export default NewsletterBox