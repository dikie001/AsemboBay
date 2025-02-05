import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const Open =()=>{
  
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className=" w-full bg-blue-950 text-white p-4 fixed top-0 left-0 shadow-md nav-bar">
      <img src={!isOpen? "ham.png": "x-menu.png"} alt="menu" height={25} width={25} 
      className="absolute right-4.5 md:hidden" onClick={()=>setIsOpen(!isOpen)}/>
     
      
        <div className="container mx-auto flex justify-between items-center">
         
          <h1><Link to="/" className="text-3xl  text-orange-600 font-bold md:text-5xl ">Asembo Chics </Link></h1>
        
          <ul className="hidden md:flex space-x-6 ">
            <li><Link to="/" className="cursor-pointer ">Home</Link></li>
            <li><Link to="/about" className="cursor-pointer">About</Link> </li>
            <li><Link to="/products" className="cursor-pointer">Products</Link> </li>
            <li><Link to="/recipes" className="cursor-pointer">Recipes</Link> </li>
            <li><Link to="/blogs" className="cursor-pointer">Blog</Link> </li>
            <li><Link to="/contact" className="cursor-pointer">Contact</Link> </li>
          </ul>
        </div>

      </nav>
      <div className="small-menu">
      <div className={isOpen? "nav-menu": "hidden"}>
       
      <ul onClick={()=>setIsOpen(!isOpen)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/products">Products</Link> </li>
            <li><Link to="/recipes">Recipes</Link> </li>
            <li><Link to="/blogs">Blog</Link> </li>
            <li className="contact"><Link to="/contact">Contact</Link> </li>
          </ul>

      </div>
      </div>
    </>
  );
};
