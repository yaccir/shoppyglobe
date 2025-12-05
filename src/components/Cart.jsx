import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import "../components/Cart.css"
import {useNavigate} from "react-router"

export const Cart = () => {
  
  const cartstore=useSelector((store)=>store.cart11.items)
        const navigate=useNavigate();
  function placeorder(){

    navigate("/placeorder")

  }
  
    return (
    <div className='cartpage'>
<div>
    
        {
            cartstore.map((item,index)=>{
            
                console.log(item)
                return <CartItem quantity={item.quantity} image={item.image} id={item.id} 
                brand={item.brand} price={item.price} name={item.name}/>
            })
        }
</div>

<div className='placeordercont'>

 <button onClick={placeorder} className='placeorderbtn' >Place Order</button>
</div>
           

    </div>
  )
}
