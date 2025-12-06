import React from 'react'
import "../components/Login.css"
import { useForm } from 'react-hook-form'

export const LogIn = () => {

  const {register,handleSubmit}=useForm();
  function onsubmit(data)
  {
    console.log(data)
  }

  return (
    <div className='logincontainer'>
      <h1 className='loginheading'>Log In </h1>

    <form onSubmit={handleSubmit(onsubmit)}  action=""  className='form0'>
   
   <div className='emailcont'>
       <label htmlFor="">Enter Email Id:</label>
       <input {...register("email")} className='input0' type="email" required/>
   </div>

   <div className='passwordcont'>
    <label htmlFor="">Enter Password:</label>
    <input {...register("password")} type="password" className='input0' required />
   </div>
   

        <input type="submit" className='sub-btn' value={"Log In"} />
    </form>


    </div>
  )
}
