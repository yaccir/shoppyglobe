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
    function handlesignup()
    {
        navigate('/signup')
    }
    function handlelogin()
    {
        navigate('/login')
    }
    function searchtocomponent()
    {
        if(search!="")
    {
        navigate(`/search/${search}`)
    }
    }

  return (
    <div className='header-container'>
        {/* icon and searchbar */}
    <div className='icon'>
        <h1 className='icon-name'>Shoppy Globe</h1>
        <input type="text" value={search}
         onChange={(e)=>setsearch(e.target.value)} className='input' />
         <button onClick={searchtocomponent}>search</button>
       
    </div>
{/* nav bar */}
    <div className='nav-container'>

        <nav className='nav0'>
            <ul className='nav-pannel'>
                <li><button onClick={handlehome}>Home</button></li>
                <li><button onClick={handlesignup}>Sign Up</button></li>
                <li><button onClick={handlelogin}>Log In</button></li>
            </ul>
        </nav>
{/* cart div */}
        <div className='cart'>
            <button onClick={handlecart}>Cart-{cart.length}</button>
        </div>

    </div>


    </div>
  )
}

export default Header