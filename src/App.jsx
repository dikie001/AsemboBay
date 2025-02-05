import React from "react";

import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { Navbar } from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Blogs from "./components/Blogs";

function App() {
 
  return (
    <>
<Router>
<Navbar/>
  <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/about" element={<About/>}/>  
    
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
  </Routes>
</Router>

    
      <div>
       
      </div>
    </>
  );
}

export default App;
