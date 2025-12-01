import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import "../components/ProductList.css"

const ProductList = () => {
    const [apidata,setApidata]=useState([])
  
    



    useEffect(()=>{
        const api=fetch('https://dummyjson.com/products');
        api.then((res)=>{
         return   res.json()
        }).then((res)=>{
            setApidata(res.products)
        
           
        })
        
    },[])

  return (
    <div className='cards-container'>
        {/* checking if the state is empty so loading data will be visible till data is fetched */}
       {apidata.length==0&&<h1>Loading Data....</h1>}


       {/* after ftching the data using useeffec to the components state apidata the cards will be visible */}
        {apidata.length!=0&& apidata.map((item,index)=>{
    
           return ( <ProductItem key={index} id={item.id} title={item.title} price={item.price} 
          image={item.images[0]} discount={item.discount} brand={item.brand}/>)
        })
       }

  

    </div>
  )
}

export default ProductList