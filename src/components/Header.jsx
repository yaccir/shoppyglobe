import React from 'react'

import "../components/Header.css"
import { useSelector } from 'react-redux'

const Header = () => {


    const cart=useSelector((store)=>store.cart11.items)
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
                <li>Home</li>
                <li>Sign Up</li>
                <li>LogIn</li>
            </ul>
        </nav>
{/* cart div */}
        <div className='cart'>
            <h2>Cart-{cart.length}</h2>
        </div>

    </div>


    </div>
  )
}

export default Header