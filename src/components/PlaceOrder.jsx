import React from 'react'
import { useForm } from 'react-hook-form'
import "../components/SignUp.css"

const PlaceOrder = () => {
      const {
      handleSubmit,
      register
    }=useForm();


    function onsubmit(data)
    {
      
    }
  return (


    
 <div className='form-container'>

    <form onSubmit={handleSubmit(onsubmit)} className='form'>
        <label htmlFor=""> Enter Your Full Name:</label>
        <input type="text" className='nameinput' {...register("fullname")} />

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


    </div>


  )  
}


export default PlaceOrder