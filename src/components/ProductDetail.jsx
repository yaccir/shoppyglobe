import React, { useEffect, useState } from 'react'
import "../components/ProductDetail.css"

const ProductDetail = () => {

//removablecode

const [apii,setapi]=useState([]);
  console.log(apii)

useEffect(()=>{

    const api=fetch('https://dummyjson.com/products');
        api.then((res)=>{
         return   res.json()
        })
        .then((res)=>{
        setapi(res.products)
       
        })
        
        

},[])

//end of removablecode



  return ( <div>
   {
    apii.length==0 &&<h1>Loading...</h1>
   }
   {
    apii.length!=0 &&<div className='topcontainer'>


         <div className='containerdetails'>

        <div className='imagecontofproduct'>
        <img className='imageofprod' src={apii[0].images[0]} alt="" />
        </div>

        <div className='detailscont'>

            <div className='cont1'>
                 <h2>{apii[0].title} </h2> 
                <h3> by {apii[0].brand}</h3>
            </div>
        

     <div className='cont2'>
                   <h5> Price: Rs {apii[0].price}/- </h5>
             <h4> Discount: {apii[0].discountPercentage}%  </h4>
        <h3> Ratings: {apii[0].rating}⭐</h3>  
        <h6> Category:  {apii[0].category}</h6>
     </div>

     <div className='form-container'>
        <form action="" className='inputlabel'>
           <div>
             <label className='labelforinput' htmlFor="">Quantity:</label>
            <input className='inputqnty' type="number" />
           </div>
            <button className='cartbutton'>Buy Now</button>
            <button className='cartbutton'>Add to Cart</button>
        </form>
     </div>

         <div className='cont3'>
             <p>Minimum Order : {apii[0].minimumOrderQuantity} </p>
          <p>Availaible Instock {apii[0].stock}</p>
          <p>Weight {apii[0].weight}Kg</p>
         </div>

        <div className='cont4'>
            <p>{apii[0].description}</p>
        </div>

       <div className='cont5'>
           <p>warranty : {apii[0].warrantyInformation} only</p>
          <p> {apii[0].warrantyInformation}</p>
          <p>{apii[0].returnPolicy}</p>
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