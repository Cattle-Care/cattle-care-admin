import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
function Login() {
    return (
        <>
           <div className="w-full h-screen bg-gradient-to-r from-gray-500 via-gray-700 to-black flex justify-center items-center">
           <div className="mx-auto  max-w-screen-xl ">
               <div className="w-96 h-96 "> 
               <h2 class="text-gray-300 text-lg  font-medium title-font mb-5">Login to your account</h2>
      <div class="relative mb-4">
        <label for="full-name" className="leading-7 text-sm text-gray-300">Email</label>
        <div className="text-white"><MailOutlineIcon/></div>
        <input type="text" id="email " name="email" className="w-full p-2 bg-transparent   border-b-2 text-white border-gray-300  outline-none "/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-300">Password</label>
        <div className="text-white"><LockOutlinedIcon/></div>
        <input type="email" id="password" name="password" className="w-full p-2 bg-transparent   border-b-2 text-white  border-gray-300  outline-none "/>
      </div>
 
      <button type="button" className="text-gray-200 bg-gray-400 border-0 py-2 my-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg">Login</button>
     
      <p className="text-xs text-gray-300 mt-3">Please Enter Your Email And Password</p>
    </div> 
               </div>   
               </div>   
        </>
    )
}

export default Login
