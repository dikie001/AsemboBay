import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className=" w-full bg-blue-950 text-white p-4 fixed top-0 left-0 shadow-md ">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl  text-orange-600 font-bold md:text-5xl ">Asembo Bay</h1>
          <ul className="hidden md:flex space-x-6 ">
            <li><Link to="/" className="hover:text-orange-700 cursor-pointer ">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-700 cursor-pointer">About</Link> </li>
            <li><Link to="/products" className="hover:text-orange-700 cursor-pointer">Products</Link> </li>
            <li><Link to="/recipes" className="hover:text-orange-700 cursor-pointer">Recipes</Link> </li>
            <li><Link to="/blogs" className="hover:text-orange-700 cursor-pointer">Blog</Link> </li>
            <li><Link to="/contact" className="hover:text-orange-700 cursor-pointer">Contact</Link> </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
