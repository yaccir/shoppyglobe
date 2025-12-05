import React, { useEffect, useState } from 'react'
import "../components/ProductDetail.css"
import {useParams} from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, setQuantities } from '../utils/cartSlice';

const ProductDetail = () => {


    
    const dispatch=useDispatch();

    const id2=useParams();
  
    const [dataofitem,setdataofitem]=useState({});



  const data=useSelector((store)=>store.cart11.items);
         const currentqnty=data.find((item)=>item.id==id2.id)
      const [inputqnty,setInputqnty]=useState(
          currentqnty?.quantity||1
  
          
      );

  useEffect(()=>{
     const api=fetch('https://dummyjson.com/products');
        api.then((res)=>{
         return   res.json()
        }).then((res)=>{

        const newarray=  res.products.filter((item)=>{

            if(Number(id2.id)==item.id){
                console.log("i m hit")
                 item.image=item.images[0];
                 console.log(item)
                 return true
            }
                 else 
                    return false;
                            })


            setdataofitem(newarray[0])
                
        })
        

  },[])



 function handleaddcart(e) {
    e.preventDefault()

     
  // Check if item already exists in cart
  const isItemAlready = data.some((item) => item.id===Number(id2.id));
   console.log(isItemAlready)
  if (isItemAlready) {
    alert("Item already added to the cart");
    return;  // Stop further execution
  }

  const { title, id, price, image, discountPercentage: discount, brand,}=dataofitem;
  // If item not present, add it to cart
  const quan=inputqnty;
  dispatch(addCartItem({ title, id, price, image, discount, brand ,quan }));
  
}

function handlequantity(e) {

  setInputqnty(e.target.value)
          if(e.target.value<=0){
              alert("at least one item should be added")
          return;}
          else
          {
              
                const value = Number(e.target.value);
                const productId = Number(id2.id);
              
                dispatch(setQuantities({ id: productId, value }));
              
          }
  
}




  return ( <div>
   {
    <div className='topcontainer'>


         <div className='containerdetails'>

        <div className='imagecontofproduct'>
        <img className='imageofprod' src={dataofitem.image} alt="" />
        </div>

        <div className='detailscont'>

            <div className='cont1'>
                 <h2>{dataofitem.title} </h2> 
                <h3> by {dataofitem.brand}</h3>
            </div>
        

     <div className='cont2'>
                   <h5> Price: Rs {dataofitem.price}/- </h5>
             <h4> Discount: {dataofitem.discountPercentage}%  </h4>
        <h3> Ratings: {dataofitem.rating}⭐</h3>  
        <h6> Category:  {dataofitem.category}</h6>
     </div>

     <div className='form-container'>
        <form action="" className='inputlabel'>
           <div>
             <label className='labelforinput' htmlFor="">Quantity:</label>
            <input onChange={handlequantity} value={inputqnty} className='inputqnty' type="number" />
           </div>
            <button className='cartbutton'>Buy Now</button>
            <button onClick={handleaddcart} className='cartbutton'>Add to Cart</button>
        </form>
     </div>

         <div className='cont3'>
             <p>Minimum Order : {dataofitem.minimumOrderQuantity} </p>
          <p>Availaible Instock {dataofitem.stock}</p>
          <p>Weight {dataofitem.weight}Kg</p>
         </div>

        <div className='cont4'>
            <p>{dataofitem.description}</p>
        </div>

       <div className='cont5'>
           <p>warranty : {dataofitem.warrantyInformation} only</p>
          <p> {dataofitem.warrantyInformation}</p>
          <p>{dataofitem.returnPolicy}</p>
       </div>
       
      
       
      
        
        </div>
        
        </div>

        <div>
        <p>reviews</p>
        
         </div>


   </div>}
</div>


  )
}

export default ProductDetail