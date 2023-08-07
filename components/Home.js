import React from 'react'

const Home = () => {

  return (
    <div>
           <div className="mt-0 px-4 xl:px-8 mx-4 w-full " id="home">
            <div className="flex w-full justify-between">
            <div className=" flex flex-col w-1/4 border-solid border-1 border-gray-100 rounded-lg  bg-white-500 p-3 mt-4">
              <div className="flex justify-between w-full p-2 border-b-2 border-gray-100">
                 <h3 className="font-semibold">Filters</h3>
                 <div className="flex">
                  <button className=" text-blue-500"
                  onClick={() =>{Reset}}
                  >Reset All
                  </button>                                 
                 </div> 
              </div>

              <div className="w-full mt-4 mb-4  border-b-2 border-gray-100">
              <h3 className="font-medium ml-4">LOCATION</h3>
              <div className="flex justify-between w-full ml-2 mb-6">
               <select
                id="location"
                value={heroData.location}
                onChange={handleChange}
                name="location"
                className="w-4/5 h-10 mt-1 mb-6 flex items-center cursor-default border-solid  border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               >
                <option value="">--Select--</option>
                <option value="Centurion">Centurion</option>
                <option value="BedfordView">BedfordView</option>
                <option value="Midrand">Midrand</option>
                <option value="Roodepoort">Roodepoort</option>
                <option value="Edenvale">Edenvale</option>
                <option value="Sandton">Sandton</option>
                <option value="Fourways">Fourways</option>
               </select>
               </div>
              </div>

              <div className="w-full mt-4 mb-4  border-b-2 border-gray-100">
              <h3 className="font-medium ml-4">BODY TYPE</h3>
              <div className="flex justify-between w-full ml-2 mb-6">
               <select
                id="bodytype"
                value={heroData.bodytype}
                onChange={handleChange}
                name="bodytype"
                className="w-4/5 h-10 mt-1 mb-6 flex items-center cursor-default border-solid  border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               >
                <option value="">--Select--</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV/Double cab">SUV & Double Cab</option>
                <option value="Van/Minibus">Van & Minibuses</option>
               </select>
               </div>
              </div>

              <div className="w-full mt-4 mb-4  border-b-2 border-gray-100">
              <h3 className="font-medium ml-4">SERVICE</h3>
              <div className="flex justify-between w-full ml-2 mb-6">
               <select
                id="service"
                value={heroData.service}
                onChange={handleChange}
                name="service"
                className="w-4/5 h-10 mt-1 mb-6 flex items-center cursor-default border-solid  border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               >
                <option value="">--Select--</option>
                <option value="wash & go">Wash & Go</option>
                <option value="wash dry">Wash & Dry</option>
                <option value="wash, dry & tyres">Wash Dry & Tryes</option>
                <option value="basic wash">Basic Wash (dry, vacuum, windows)</option>
                <option value="super wash">Super Wash (basic & tyre shine)</option>
                <option value="wash & wax">Wash & Wax (super wash & wax)</option>
                <option value="Full Valet">Full Valet</option>
               </select>
               </div>
              </div>
            </div> 

             <div className="flex flex-col w-3/4 ml-8 mt-4  border-solid  border-1 border-gray-100 rounded-lg bg-white-500 p-3">
                {filteredData.map((item) =>{
                return(
                  <div>
                    <div className="flex justify-between w-full p-2 border-b-2 border-gray-100" key={item.id}>
                    <h2 className="font-medium">Blufontain {item.name} carwash is located at {item.location}</h2>
                   </div>

                   <h3 className="ml-3 mt-2 font-light text-sm">Physical Address: {item.physicalAddress}</h3>
                   <h3 className="ml-3 font-light text-sm ">Contact: {item.contact}</h3>

                   <div className='flex flex-col full border-solid border-2 border-gray-100 rounded-lg m-2 p-2 mb-4 bg-white-300 shadow-md hover:shadow-xl'>
                    
                    <iframe src={item.googleMaps} className='w-full h-[360px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="w-full py-2 flex justify-between mt-4 text-lg text-black-600 font-medium">
                      <p>{item.name}</p>
                      <p>{heroData.bodytype}</p>
                      <p>R {Prices()}</p>
                    </div>

                    <button className=" w-1/4 px-3 py-3 text-sm font-normal hover:text-blue-400 hover:bg-white-300 border-2 border-blue-300 rounded-lg bg-blue-400 text-white-500" onClick={() =>showStepper(item)}>
                      Book Now
                    </button>
                </div>
                  </div>
                )
              })}

      {viewBookings && (
        <>
        <Drawer
        width={1200}
        placement="right"
        closable={false}
        onClose={onClose2}
        open={visibl2}
        >
          <div>
          <button className='absolute top-4 right-14 cursor-pointer p-1 border-2' onClick={onClose2}>
            <AiOutlineClose size={24} />
            </button>
          </div>
           <h4 className="text-xl text-blue-500 mb-2 ">Car wash Bookings</h4>
           <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left ">
        <thead class="text-medium  uppercase ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                   Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Booked Date & Time
                </th>

                <th scope="col" class="px-6 py-3">
                   Service
                </th>
                <th scope="col" class="px-6 py-3">
                   Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
        {filteredBookings.map((dat, index) => {
            return (
            <tr key={index} class="bg-white border-b border-gray-100  dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-500 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {dat.firstName} {dat.lastName} 
                </th>
                <td class="px-6 py-4">{dat.email}</td>
                <td class="px-6 py-4">
                {dat.date} {dat.time}
                </td>
                <td class="px-6 py-4"> {dat.service} </td>
                <td class="px-6 py-4">R {dat.Price}</td>
                <td class="px-6 py-4">
                    <a href="#" onClick={() =>showCancel(dat)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Cancel</a>
                    <a href="#" onClick={() =>showReschedule(dat)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-4">Reschedule</a>
                </td>
            </tr>
                );
              })}
        </tbody>
    </table>
</div>
      </Drawer>
        </>
      )}

      {cancelBooking && (
        <>
        <Drawer
          width={500}
          placement="right"
          closable={false}
          onClose={onClose1}
          open={visibleCancel}
          >

        <div>
          <button className='absolute top-4 right-6 cursor-pointer p-1 border' onClick={onClose1}>
            <AiOutlineClose size={20} />
            </button>
          </div>

          <h4 className="text-xl text-blue-500 my-4">Cancel Appointment</h4>
         <>
            <div>
              <h1 className="text-base mb-4">Cancel booking for: {cancelBooking?.firstName} {cancelBooking?.lastName} </h1>
              <form class="w-full max-w-lg my-3 ">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      for="reasons"
                      className="block uppercase  font-bold text-sm mb-2"
                    >
                      Reason For Cancelling
                    </label>
                    <select
                      class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white pr-4"
                      id="grid-reason"
                      name="reason"
                    >
                      <option value="">--Select Reason--</option>
                      <option value="reason1">Personal Reasons</option>
                      <option value="reason2">
                        Change of Dates or destination
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      for="grid-first-name"
                      className="block uppercase  font-bold text-sm mb-2"
                    >
                      Add Notes
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-notes"
                      name="notes"
                      type="text"
                      placeholder="Notes"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      for="grid-first-name"
                      className="block uppercase  font-bold text-sm mb-2"
                    >
                      Booking ID
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-notes"
                      name="bookingID"
                      type="text"
                      value={cancelBooking?._id} 
                      placeholder="Booking ID"
                      readOnly
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      for="grid-first-name"
                      className="block uppercase  font-bold text-sm mb-2"
                    >
                      Booking Date
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-notes"
                      name="date"
                      value={cancelBooking?.date} 
                      type="date"
                      placeholder="Notes"
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div
                onClick={() => handleSubmit(cancelBooking)}
                className="font-medium cursor-pointer text-center tracking-wide py-2 mr-4 text-xs sm:px-2 w-24 border border-blue-500 text-sky-500 bg-white-500 outline-none  rounded-lg capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-sky-500 mt-8"
              >
                Confirm
              </div>
            </div>
          </>
        </Drawer>
        </>
      )}

      {reschedule &&(
        <Drawer
          width={500}
          placement="right"
          closable={false}
          onClose={onClose3}
          open={visibleReschedule}
          >
          <div>
          <button className='absolute top-4 right-6 cursor-pointer p-1 border' onClick={onClose3}>
            <AiOutlineClose size={20} />
            </button>
          </div>
          <div>
          <h4 className="text-xl text-blue-500 my-4 ">Reschedule Appointment</h4>
         <form onSubmit={handleSubmitt}>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    for="grid-first-name"
                    className="block uppercase  font-bold text-sm mb-2"
                  >
                    Change Date
                  </label>
                  <input
                    value={userData.date}
                    onChange={handlChange}
                    class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="date"
                    name="date"
                    type="date"
                    placeholder="Change Date"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    for="date"
                    className="block uppercase  font-bold text-sm mb-2"
                  >
                    Change Time
                  </label>
                  <input
                    value={userData.time}
                    onChange={handlChange}
                    class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="time"
                    name="time"
                    type="time"
                    placeholder="Change Booking Time"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    for="grid-first-name"
                    className="block uppercase  font-bold text-sm mb-2"
                  >
                    Change Service if Needed
                  </label>
               <select
                id="service"
                value={userData.service}
                onChange={handlChange}
                name="service"
                class="w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
               >
                <option value="">--Select--</option>
                <option value="wash & go">Wash & Go</option>
                <option value="wash dry">Wash & Dry</option>
                <option value="wash, dry & tyres">Wash Dry & Tryes</option>
                <option value="basic wash">Basic Wash (dry, vacuum, windows)</option>
                <option value="super wash">Super Wash (basic & tyre shine)</option>
                <option value="wash & wax">Wash & Wax (super wash & wax)</option>
                <option value="Full Valet">Full Valet</option>
               </select>
                </div>

                {/* <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    for="grid-first-name"
                    className="block uppercase  font-bold text-sm mb-2"
                  >
                    PRICE
                  </label>
                  <input
                    value={userData.price}
                    onChange={handlChange}
                    class="appearance-none block w-full bg-gray-200 text-black-500 border border-sky-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Change Service"
                    readOnly
                  /> 
                  </div> */}
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div
                  onClick={() => handlSubmit(reschedule)}
                  className="font-medium cursor-pointer text-center tracking-wide py-2 mr-4 text-xs sm:px-2 w-24 border border-blue-500 text-sky-500 bg-white-500 outline-none  rounded-lg capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue"
                >
                  Confirm
                </div>
              </div>
            </form>
            </div>
      </Drawer>
      )}


       {stepper && (
        <div>
        <div className='fixed insert-0 bg-black-600 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-0 right-0 z-50'></div>
        <div className='w-2/4 h-6/7 fixed top-1/3 right-60  border-2 border-gray-100 z-50 bg-white-300'>
          <div className="mr-4">
          <div className="flex justify-between bg-gray-100">
            {steps?.map((step, i)=>(
              <div key={i} className={`step-item ${currentStep === i+1 && 'active'} ${(i+1 < currentStep || complete) && 'complete'}`}>
                <div className="step">{
                  (i+1 < currentStep || complete ? <TiTick size={20}/> : i +1 )
                }</div>
                <p className="">{step}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center m-4 font-medium">
            <h1 className="text-blue-400 mr-2">Blufontain carWash</h1> <h1>Bookings</h1>
          </div>

         <div className="mb-4">
          { getSectionComponent()}
          {
            ( currentStep > 1 &&  currentStep  < steps.length + 1 ) &&
            <button 
              onClick={()=>{
                currentStep === steps.length +1
                ? setComplete(true) 
                : setCurrentStep(prev => prev -1)
              }}
              className="px-3 py-1 ml-4 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500"
            >
             Previous
            </button>
          }
          
          {
            !complete &&
            <button 
              onClick={()=>{
              currentStep === steps.length 
              ? setComplete(true) 
              :setCurrentStep(prev => prev + 1)
              }}
              className="px-3 py-1 ml-4 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500"
            >
              {/* {currentStep === steps.length ? "Submit" : "Next"} */}
              Next 
              </button>

          }
      {currentStep === steps.length && 
            <button onClick={()=> buttonClick()}
            className="px-3 py-1 ml-4 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500"
          >Submit</button>
      }

      
          </div>
          </div>
          <button className='absolute top-0 right-0 cursor-pointer p-1 border-2 border-blue-500' onClick={toggleStepper}>
            <AiOutlineClose size={24}/>
            </button>
        </div>
        </div>
       )}

   </div> 
   </div>
  </div>
    </div>
  )
}

export default Home