import React, { useEffect } from 'react'
import "../components/CartItem.css"

const CartItem = ({image,id,brand,price,name}) => {


  return (
    <div className='cart-container'>
        <div>
            <img className='imageofcartitem' src={image} alt="" />
        </div>
        <div className='cart-details'>
            <h1>{name}</h1>
            <div className='cart-details-2'>
            <p>{price}</p>
               <p>discount</p>
                <button>Remove</button>
            </div>
        </div>
        <div className='cart-details-3'>
            <form action="" className='cart-form'>
                <label htmlFor="">Quantity:</label>
                <input type="number" />

            </form>
        </div>

    </div>
  )
}

export default CartItem