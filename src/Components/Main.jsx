import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Main() {
     const[info,setInfo]=useState({
      fullname:'',email:'',mobile:'',address:'',course:''
     })

     const handleChange = (e) =>{
      setInfo({
            ...info,
            [e.target.name]: e.target.value
      })
     }

     const handleSubmit = (e) =>{
      e.preventDefault()
      if(formValidation()){
            toast.success('Form Submited Sucessfully ')
            console.log(info)
            setInfo({
             fullname:'',email:'',mobile:'',address:'',course:''
            })
            }
          
      }
      

      const formValidation = () => {
            if (info.fullname === '') {
              toast.error('Full Name is Mandatory');
              return false;
            } else if (info.mobile === '') {
              toast.error('Mobile Number Required');
              return false;
            } else if (info.email === '') {
              toast.error('Email Address is Mandatory');
              return false;
            } else if (info.address === '') {
              toast.error('Please Add your Address');
              return false;
            }
            return true; 
          };
          


  return (
    <>
   <ToastContainer>
   position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce,
   </ToastContainer>



    <div className="header">
      <h2>React Form and Validarions</h2>
    </div>
    <div className="container">
    <h3>Course Registration</h3>
<form action="">
<div className="input-filed">
<label htmlFor="">Fullname</label>
<input type="text" 
onChange={handleChange}
name="fullname" id="" />
</div>
<div className="input-filed">
<label htmlFor="">Mobile No</label>
<input
 type="number"
 onChange={handleChange} name="mobile" id="" />
</div>
<div className="input-filed">
<label htmlFor="">Email Address</label>
<input type="email" onChange={handleChange} name="email" id="" />
</div>
<div className="input-filed">
<label htmlFor="">Permanant Address</label>
<input type="text" onChange={handleChange} name="address" id="" />
</div>

     <button type='submit' onClick={handleSubmit} >Submit</button>
</form>
    </div>
    
    </>
  )
}

export default Main