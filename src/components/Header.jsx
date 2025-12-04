import React, { useState } from 'react'

import "../components/Header.css"
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router"

const Header = () => {

    const [search,setsearch]=useState();

    const navigate=useNavigate()


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


  return (
    <div className='header-container'>
        {/* icon and searchbar */}
    <div className='icon'>
        <h1 className='icon-name'>Shoppy Globe</h1>
        <input type="text" className='input' />
       
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