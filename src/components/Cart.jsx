import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import "../components/Cart.css"
import {useNavigate} from "react-router"

function Cart(){
  
  const cartstore=useSelector((store)=>store.cart11.items)
        const navigate=useNavigate();
  function placeorder(){

    navigate("/placeorder")

  }
  
    return (

      // cart page 
    <div className='cartpage'>
<div>
    {/* shows added item through loop */}
        {
            cartstore.map((item,index)=>{
            
                console.log(item)
                return <CartItem quantity={item.quantity} image={item.image} id={item.id} 
                brand={item.brand} price={item.price} name={item.name}/>
            })
        }
</div>


<div  className={cartstore.length==0?"vcart":"incart" }>
  <h1>NO ITEMS ADDED TO THE CART</h1>
</div>

<div className={cartstore.length!=0?"placeordercont":"incart" }>

 <button onClick={placeorder} className='placeorderbtn' >Place Order</button>
</div>
           

    </div>
  )
}


export default Cart;