import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Men")
    const [subCategory, setSubCategory] = useState("Topwear")
    const [bestseller, setBestseller] = useState(false)
    const [sizes, setSizes] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            
            const formData = new FormData()

            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: {token}})

            if(response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-6">

        {/* Upload Images */}
        <div>
            <p className="mb-2 font-medium">Upload Image</p>

            <div className="flex gap-4">
            <label htmlFor="image1">
                <img className="w-24 cursor-pointer border rounded" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
                <img className="w-24 cursor-pointer border rounded" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
                <img className="w-24 cursor-pointer border rounded" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
                <img className="w-24 cursor-pointer border rounded" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
            </div>
        </div>


        {/* Product Name */}
        <div className="w-full">
            <p className="mb-2 font-medium">Product name</p>
            <input onChange={(e) => setName(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2 border rounded outline-none focus:border-black"
            type="text"
            placeholder="Type here"
            required
            />
        </div>


        {/* Product Description */}
        <div className="w-full">
            <p className="mb-2 font-medium">Product description</p>
            <textarea onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2 border rounded outline-none focus:border-black"
            placeholder="Write content here"
            required
            />
        </div>


        {/* Category Section */}
        <div className="flex gap-6 flex-wrap">

            <div>
            <p className="mb-2 font-medium">Product category</p>
            <select onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 border rounded">
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
            </select>
            </div>

            <div>
            <p className="mb-2 font-medium">Sub category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className="px-3 py-2 border rounded">
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
            </select>
            </div>

            <div>
            <p className="mb-2 font-medium">Product Price</p>
            <input onChange={(e) => setPrice(e.target.value)}
                className="px-3 py-2 border rounded w-28"
                type="number"
                placeholder="25"
            />
            </div>

        </div>


        {/* Sizes */}
        <div>
            <p className="mb-2 font-medium">Product Sizes</p>

            <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                <div
                    key={index}
                    onClick={() =>
                    setSizes((prev) =>
                        prev.includes(size)
                        ? prev.filter((item) => item !== size)
                        : [...prev, size]
                    )
                    }
                    className={`px-3 py-1 border rounded cursor-pointer hover:bg-gray-100 
                    ${sizes.includes(size) ? "bg-pink-100" : ""}`}
                >
                    <p>{size}</p>
                </div>
                ))}
            </div>
        </div>


        {/* Bestseller */}
        <div className="flex items-center gap-2">
            <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
            <label htmlFor="bestseller">Add to bestseller</label>
        </div>


        {/* Submit Button */}
        <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
            ADD
        </button>

        </form>
    )
}

export default Add