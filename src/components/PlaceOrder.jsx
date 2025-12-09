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
      register,
      formState:{errors,isSubmitting}
    }=useForm();

const userlogin=useSelector((store)=>{
     return store.user11.users;
   
})

 


    function onsubmit(data)
    {
      //adding data to redux store
dispatch(registerUser(data))
dispatch(clearCartItems())
setflag(true);
      
    }
// after placing order waits for 3 secs and redirects to home
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
        <input type="text" className='nameinput' 
          {...register("fullname",
          {required: {value:true , message:"Full name cannot be empty"}  
          , maxLength:{value:30 ,message:"Only Maximum of 30 characters can be entered"},
          minLength:{value:5 ,message:"at least 5 characters should be entered"},
          pattern:{value :/^[A-Za-z][A-Za-z ]*$/, message:"ONLY CHARECTERS ARE ALLOWED "
 }
        
        }
          )} />

{/* shows error message */}
          {
            errors.fullname&& <p className='p1'>{errors.fullname.message}</p>
          }

         <div className='radio-cont'>
         <div>
               <input {...register("gender",
                   {required: "Please select your gender" }

               )} type="radio" />
             <label htmlFor="">Male</label>
             {errors.gender&& <p className='p1'>{errors.gender.message} </p>}
         </div>
        <div>

              <input {...register("gender",
                {required: "Please select your gender" }
              )} type="radio" /> 
         <label htmlFor="">Female</label>
        </div>
         </div>

      <div className='mobileandemail'>

         <div>
             <label htmlFor="">Mobile No:</label>
             <input {...register("mobileno" ,

                  {required: {value:true , message:"Mobile no cannot be empty"}  
          , maxLength:{value:10 ,message:"enter valid mobile  of 10 digits"},
          minLength:{value:10 ,message:"aenter valid mobile no of 10 digits"},
          pattern:{value :/^[6-9][0-9]{9}$/, message:" enter valid mobile no "
 }
        
        }


             )} type="text"  />

             {errors.mobileno && <p className='p1'> {errors.mobileno.message} </p>}
        </div>
       

            <div>
                  <label htmlFor="">Email Id:</label>
                  <input {...register("email",

                           {required: {value:true , message:"Email cannot be empty"}  
          , maxLength:{value:30 ,message:"Only Maximum of 30 characters of email can be entered"},
        
          pattern:{value :/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message:"Enter valid Email "
 }
        
        }

                  )} type="text" />

                  {errors.email&& <p className='p1'> {errors.email.message} </p>}
            </div>
        
      </div>

    <div className='address-cont'>
             <label htmlFor="">Enter Address:</label>
                 <input {...register("address",
                {required: {value:true , message:"Address cannot be empty"}  
          ,  minLength:{value:20 ,message:"at least 5 characters should be entered"},
        
        }
                 )} type="text" />
                 {errors.address&&<p className='p1'>{errors.address.message} </p>}
    </div>

       <div className='submit-btn'>
          <input className='submit' type="Submit"  disabled={isSubmitting} value= {isSubmitting?"Booking the Order":"Book Order"}/>
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