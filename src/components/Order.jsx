import React from 'react'

export const Order = () => {
  return (
    <div  className='mt-15 product'>
        <form action="" method='POST'>
        <h2 className='text-2xl text-orange-600 font-extrabold'>Enter Your Details</h2>
        <label  className="font-bold" for="full-name">Full name:</label><br />
        <input className="p-2 text-blue-950 font-semibold border-2 rounded-lg outline-0 " id='full-name' required type="text" name="Full Name" placeholder='full name'/><br/>
        <label className="font-bold" htmlFor="phone">Phone Number:</label><br></br>
        <input className="p-2 text-blue-950 font-semibold border-2 rounded-lg outline-0 " type="number" required name="Phone Number" id="phone" /><br />
        <label className="font-bold" >Choose Product</label><br></br>
            <label className="font-semibold" htmlFor="eggs">Eggs </label>
        <input type="radio" name='radio' id='eggs' /><br />

        <label className="font-semibold" htmlFor="Hen">Hen </label>
        <input type="radio" name='radio' id='Hen' /><br />

        <label className="font-semibold" htmlFor="Cockerel"  >Cockerel  </label>
        <input type="radio" name='radio' id='cockerel'/><br />

        <label className="font-semibold" htmlFor="eggs">Ready Made </label>
        <input  type="radio" name='radio' /><br />
  
         <label className="font-bold" htmlFor="message">Delivery Instructions:</label><br />
        <textarea className='outline-0 p-2 w-2xs border-2 text-blue-950 font-semibold rounded-t-md ' name="Additional Message" id="message" placeholder='Anything else...?'></textarea>
        <br /><input type="submit" value="Submit" className='m-8 order' />
        </form>
    </div>
  )
}
