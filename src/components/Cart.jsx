import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export const Cart = () => {
  
  const cartstore=useSelector((store)=>store.cart11.items)
  console.log("uioo")
  console.log(cartstore)
    return (
    <div>

        {
            cartstore.map((item,index)=>{
            
                return <CartItem image={item.image} id={item.id} 
                brand={item.brand} price={item.price} name={item.name}/>
            })
        }

            <button >Place Order</button>

    </div>
  )
}
