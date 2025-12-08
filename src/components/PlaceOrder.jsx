import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "../components/SignUp.css"
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../utils/userSlice';
import {useNavigate} from "react-router"
import { clearCartItems } from '../utils/cartSlice';


const PlaceOrder = () => {

  const navigate=useNavigate();
  const[flag,setflag]=useState(false)

  const dispatch=useDispatch();
      const {
      handleSubmit,
      register
    }=useForm();

const userlogin=useSelector((store)=>{
     return store.user11.users;
   
})

 
console.log(userlogin);

    function onsubmit(data)
    {
dispatch(registerUser(data))
dispatch(clearCartItems())
setflag(true);
      
    }

  if(flag==true)
  {
     setTimeout(() => {
        navigate('/')
      }, 3000);
  }
  return (


    
 <div className='form-container'>

    <form onSubmit={handleSubmit(onsubmit)}  className={!flag?'form':"formcontt"}>
        <label htmlFor=""> Enter Your Full Name:</label>
        <input type="text" className='nameinput' {...register("fullname") } />

         <div className='radio-cont'>
         <div>
               <input {...register("gender")} type="radio" />
             <label htmlFor="">Male</label>
         </div>
        <div>
              <input {...register("gender")} type="radio" /> 
         <label htmlFor="">Female</label>
        </div>
         </div>

      <div className='mobileandemail'>

         <div>
             <label htmlFor="">Mobile No:</label>
             <input {...register("mobileno")} type="text" />
        </div>
       

            <div>
                  <label htmlFor="">Email Id:</label>
                  <input {...register("email")} type="text" />
            </div>
        
      </div>

    <div className='address-cont'>
             <label htmlFor="">Enter Address:</label>
                 <input {...register("address")} type="text" />
    </div>

       <div className='submit-btn'>
          <input className='submit' type="Submit" value={"Book Order"}/>
       </div>
        
    </form>

<div className={flag ? "visib" : "invisib"}>
  {flag === true && (
    <h1>Order placed to address: {userlogin[userlogin.length - 1]?.address}</h1>
  )}
</div>


    </div>


  )  
}


export default PlaceOrder