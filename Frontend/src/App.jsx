import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from 'react-toastify'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Toast Notification */}
      <ToastContainer />

      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <SearchBar />

      {/* Main Content */}
      <main className="grow max-w-360 mx-auto w-full px-4 sm:px-8 lg:px-12">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}