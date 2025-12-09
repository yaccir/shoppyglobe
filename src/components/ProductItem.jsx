import { useState } from "react";
import "../components/ProductItem.css"
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../utils/cartSlice";
import {useNavigate} from "react-router"


const ProductItem = ( {id,title,price,image,discount,brand}) => {

const quan=1;
const navigate=useNavigate()
  const [cartitem,setCartitem]=useState([]);
  const dispatch=useDispatch();
  const data=useSelector((store)=>{
    
    return store.cart11.items;
  })


  function handleclick()
  {
    navigate(`/productdetail/${id}`);
  }

 function handleaddcart(e) {
  e.stopPropagation();

  // Check if item already exists in cart
  const isItemAlready = data.some((item) => item.id === id);

  if (isItemAlready) {
    alert("Item already added to the cart");
    return;  // Stop further execution
  }

  // If item not present, add it to cart
  dispatch(addCartItem({ title, id, price, image, discount, brand,quan }));
}



  return (

    <div onClick={handleclick} className="itemcard">
      {/* item card  */}
      <div className="itemimage">
        <img className="cardimage" loading="lazy" src={image} alt="product image" />
      </div>
      <div className="itemdetails">
        {/* name of the item */}
        <p className="itemname">{title}</p>
        <div className="pricencart">
          {/* price of the item */}
        <p>${price}</p>
        {/* add to cart button */}
        <button onClick={handleaddcart} className="addcartbtn">add to cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductItem;