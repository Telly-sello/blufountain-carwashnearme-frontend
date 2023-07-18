'use client'

import React, { useState } from 'react'

const Signin = () => {
    const [signUpData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        user_email:"",
        username: "",
        nationalId: "",
        phoneNumber: "",
        age: "", 
        password: "",
        confirmpass: ""    
      })

      function handleChange(event) {
        setSignupData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
         }
       })
    }

  return (
    <div id="signup"> 
    <h2 className='flex justify-start font-medium ml-4 '>User Details</h2>
    <div className="w-full flex justify-center">
     <form className='w-full flex flex-col border-2 border-gray-500 m-3'>
    <div className='flex w-full justify-between'>
      <input 
       type="text" 
       name="fName" 
       placeholder='First Name'
       onChange={handleChange}
       value={signUpData.firstName}
       className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
      />
  
       <input 
       type="text" 
       name="lastName" 
       placeholder='Last Name'
       onChange={handleChange}
       value={signUpData.lastName}
       className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
      /> 
    </div>
  
    <div className='flex w-full justify-between'>
       <input 
       type="text" 
       name="username" 
       placeholder='Username'
       onChange={handleChange}
       value={signUpData.username}
       className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
      /> 
  
      <input type="email" 
      name="user_email" 
      placeholder='Email' 
       onChange={handleChange}
       value={signUpData.user_email}
      className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>
      </div>
  
      <div className='flex w-full justify-between'>
       <input 
       type="text" 
       name="phoneNumber" 
       placeholder='Phone Number'
       onChange={handleChange}
       value={signUpData.phoneNumber}
       className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
      /> 
  
      <input type="text" 
      name="age" 
      placeholder='Age' 
       onChange={handleChange}
       value={signUpData.age}
      className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>
      </div>

      <div>
      <input 
       type="text" 
       name="nationalId" 
       placeholder='National ID'
       onChange={handleChange}
       value={signUpData.nationalId}
       className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
      /> 
      </div>
      </form>
    </div>
    </div>
  )
}

export default Signin