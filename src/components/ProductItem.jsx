import { useState } from "react";
import "../components/ProductItem.css"
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../utils/cartSlice";


const ProductItem = ( {id,title,price,image,discount,brand}) => {


  const [cartitem,setCartitem]=useState([]);
  const dispatch=useDispatch();
  const data=useSelector((store)=>{
    
    return store.cart11.items;
  })



 function handleaddcart() {

  // Check if item already exists in cart
  const isItemAlready = data.some((item) => item.id === id);

  if (isItemAlready) {
    alert("Item already added to the cart");
    return;  // Stop further execution
  }

  // If item not present, add it to cart
  dispatch(addCartItem({ title, id, price, image, discount, brand }));
}



  return (

    <div className="itemcard">
      {/* item card  */}
      <div className="itemimage">
        <img className="cardimage" src={image} alt="" />
      </div>
      <div className="itemdetails">
        {/* name of the item */}
        <p className="itemname">{title}</p>
        <div className="pricencart">
          {/* price of the item */}
        <p>{price}</p>
        {/* add to cart button */}
        <button onClick={handleaddcart} className="addcartbtn">add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductItem;