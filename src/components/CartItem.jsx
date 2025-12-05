import React, { useEffect, useState } from 'react'
import "../components/CartItem.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, setQuantities } from '../utils/cartSlice';
import {useNavigate} from "react-router"

const CartItem = ({image,id, quantity,brand,price,name}) => {


    const navigate=useNavigate();
       const store=useSelector((store)=>store.cart11.items);
       const currentqnty=store.find((item)=>item.id==id)
    const [inputqnty,setInputqnty]=useState(
        currentqnty.quantity

        
    );


    const dispatch=useDispatch();

    function handlechange(e)
    {
        e.stopPropagation()
        setInputqnty(e.target.value)
        if(e.target.value<=0){
            alert("at least one item should be added")
        return;}
        else
        {
            
              const value = Number(e.target.value);
              const productId = Number(id);
            
              dispatch(setQuantities({ id: productId, value }));
            
        }

    }

    function handleremove(e)
    {
        e.stopPropagation()
        dispatch(removeCartItem(id))
        console.log("i am hit 1")

    }

     function handleclick()
  {
    navigate(`/productdetail/${id}`);
  }

  return (
    <div className='cart-container' onClick={handleclick}>
        <div>
            <img className='imageofcartitem' src={image} alt="" />
        </div>
        <div className='cart-details'>
            <h1>{name}</h1>
            <div className='cart-details-2'>
            <p>{price}</p>
               <p>discount</p>
                <form action="" className='cart-form'>
                <label className='labelofqnty' htmlFor="">Quantity:</label>
                <input onChange={handlechange} value ={inputqnty}  
                 className='cartquantity' 
                type="number"  />

            </form>
               
            </div>
        </div>
        <div className='cart-details-3'>
            <button onClick={handleremove}>Remove</button>
        </div>

    </div>
  )
}

export default CartItem