import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <div className='mt-15 product'>
      <h2 className='text-3xl text-orange-950 font-extrabold'>Gallery</h2>
      <div className='grid grid-cols-2 gap-2 ring-pink-600 md:grid-cols-3'>
      <img  src="/public/img/chicken.jpg" alt="chicken" className='chicken-img' />
      <img src="/public/img/eggs1.jpg" alt="eggs" className='chicken-img' />
      <img src="/public/img/cock.jpg" alt="a bog hen" className='chicken-img' />
      <img src="/public/img/eggs2.jpg" alt="eggs" className='chicken-img' />
      <img src="/public/img/eggs3.jpg" alt="eggs" className='chicken-img' />
      </div>

     <li className='order'><Link to="/order">Make an Order</Link></li>
    </div>
    
  )
}
export default Products