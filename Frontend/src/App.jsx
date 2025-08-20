import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Order from "./pages/Order";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { SearchBar } from "./pages/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastStyle={{
          background: "#18181B",
          color: "#FFFFFF",
        }}
      />
      <NavBar />
      <div className="mt-28">
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product:productId" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
