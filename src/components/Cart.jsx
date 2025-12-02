import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export const Cart = () => {
  
  const cartstore=useSelector((store)=>store.cart11.items)
  console.log("i am cartstore"+cartstore)
    return (
    <div>

        {
            cartstore.map((item,index)=>{
                console.log(item)
                return <CartItem image={item.image} id={item.id} 
                brand={item.brand} price={item.price} name={item.name}/>
            })
        }



    </div>
  )
}
