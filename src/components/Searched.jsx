import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import ProductItem from './ProductItem';

const Searched = () => {

  const [searchedapi, setsearchedapi] = useState([]);
  const  {term} = useParams() // <-- your URL param


  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
       

        const filtered = data.products.filter((item) => {
            
          return (

            item.title?.toLowerCase().includes(term.toLowerCase()) 
            ||item.brand?.toLowerCase().includes(term.toLowerCase())
          );
        });

        setsearchedapi(filtered);
      
      });

  }, [term]);

  return (
    <div className='cards-container'>
      
      {searchedapi.length === 0 && <h1>Loading Data....</h1>}

      {searchedapi.length !== 0 && searchedapi.map((item, index) => {
        return (
          <ProductItem
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.images[0]}
            discount={item.discount}
            brand={item.brand}
          />
        );
      })}

    </div>
  );
};

export default Searched;
