import React, { useEffect } from 'react'
import "../components/CartItem.css"
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../utils/cartSlice';

const CartItem = ({image,id,brand,price,name}) => {
    const dispatch=useDispatch();

    function handleremove()
    {
        dispatch(removeCartItem(id))
        console.log("i am hit 1")

    }

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
                <button onClick={handleremove}>Remove</button>
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