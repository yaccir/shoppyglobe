import React, { useState } from 'react'
import "../components/Header.css"
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router"

const Header = () => {
     const navigate=useNavigate()

    const [search,setsearch]=useState("");
    
    

   


    const cart=useSelector((store)=>store.cart11.items)
    function handlecart()
    {
        navigate("/cart");
    }
    function handlehome()
    {
        navigate("/")
    }
 
    function searchtocomponent()
    {
        if(search.trim()!="")
    {
        navigate(`/search/${search}`)
    }
    if(search.trim()=="")
    {
        alert("Enter item name")
        return;
    }
    }
    function handlechange(e)
    {
       setsearch(e.target.value)
     
    }

  return (
    <div className='header-container'>
        {/* icon and searchbar */}
    <div className='icon'>
         
          <div className= 'menusmall'>
          
        <button className='btns' onClick={handlehome}>Home</button>
        <button className='btns' onClick={handlecart}>Cart-{cart.length}</button>


    </div>
        <div className='searchandicon'>
            <h1 className='icon-name'>Shoppy Globe</h1>
            <div className='searchcont'>
                   <input  type="text" className='input'placeholder='Search here.........' value={search} onChange={handlechange} />
         <button className='btnssearch' onClick={searchtocomponent}>search</button>
            </div>
     
        </div>
       
    </div>
{/* nav bar */}



     
    <div className='nav-container'>

        <nav className='nav0'>
            <ul className='nav-pannel'>
                <li><button className='btns' onClick={handlehome}>Home</button></li>
                <li> <button className='btns' onClick={handlecart}>Cart-{cart.length}</button></li>
          
            </ul>
        </nav>


    </div>
  

    </div>
  )
}

export default Header