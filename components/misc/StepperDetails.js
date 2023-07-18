import React from 'react'

const StepperDetails = () => {

    const [stepperData, setStepperData] = useState(
        {
          fName: "",
          lastName: "",
          user_email:"",
          nationalId: "",
          phoneNumber: "",
          age: ""
        }
      )

      function handleStepperChange(event) {
        setStepperData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
         }
       })
    }

    function UserDetails() {
        return (
            <> 
            <h2 className='flex justify-start font-medium ml-4 '>User Details</h2>
            <div className="w-full flex justify-center">
             <form className='w-full flex flex-col border-2 border-gray-500 m-3'>
            <div className='flex w-full justify-between'>
              <input 
               type="text" 
               name="fName" 
               placeholder='First Name'
               onChange={handleStepperChange}
               value={stepperData.fName}
               className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
              />
        
               <input 
               type="text" 
               name="lastName" 
               placeholder='Last Name'
               onChange={handleStepperChange}
               value={stepperData.lastName}
               className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
              /> 
            </div>
        
            <div className='flex w-full justify-between'>
               <input 
               type="text" 
               name="nationalId" 
               placeholder='National ID'
               onChange={handleStepperChange}
               value={stepperData.nationalId}
               className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
              /> 
        
              <input type="email" 
              name="user_email" 
              placeholder='Email' 
               onChange={handleStepperChange}
               value={stepperData.user_email}
              className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>
              </div>
        
              <div className='flex w-full justify-between'>
               <input 
               type="text" 
               name="phoneNumber" 
               placeholder='Phone Number'
               onChange={handleStepperChange}
               value={stepperData.phoneNumber}
               className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
              /> 
        
              <input type="text" 
              name="age" 
              placeholder='Age' 
               onChange={handleStepperChange}
               value={stepperData.age}
              className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>
              </div>
              </form>
            </div>
            </>   
        );
      }

      function Pickup() {
        return(
          <form className="w-ful border-2 border-gray-100 m-4">
            <div className="w-6/7 flex justify-between mx-4 my-8 ">
            
            <div className="flex flex-col w-1/4">
            <label className="flex ml-3 mt-4 font-medium justify-start" htmlfor="pickupLocation">Pickup Location:</label>
            <select
                    id="pickupLocation"
                    //value={heroData.minPrice}
                    //onChange={handleChange}
                    name="pickupLocation"
                    className="w-5/6 h-10  ml-2 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
                   >
                    <option value="">--Select--</option>
                    <option value="Benoni">Benoni Industrial, Benoni</option>
                    <option value="Santon">Sandton Central, Sandton</option>
                    <option value="Melrose">Melrose North, JHB</option>
                    <option value="Arcadia">Arcadia, Pretoria</option>
                    <option value="Centurion">Centurion Central</option>
              </select>
    
               </div>
    
            <div className="flex flex-col w-1/4">
            <label className="flex ml-3 mt-4 font-medium justify-start" htmlForfor="pickupdate">Pickup Date:</label>
            <input 
               type="datetime-local"
               id="pickupdate"
               name="pickupdate"
               className="w-5/6 h-10 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               />
               
            </div>
    
            <div className="flex flex-col w-1/4">
            <label className="flex ml-3 mt-4 font-medium justify-start" htmlfor="returndate">Return Date:</label>
            <input 
              type="datetime-local"
              id="returndate" 
              name="returndate"
              className="w-5/6 h-10  flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               />    
            </div>
              </div>   
          </form>
        );
      }

      function Confirmation() {
        return <h2>Booking is confirmed</h2>;
      }

  return (
    <div>StepperDetails</div>
  )
}

export default StepperDetails