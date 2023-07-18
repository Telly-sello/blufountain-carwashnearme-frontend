import React, { useMemo, useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {GrPowerReset}  from 'react-icons/gr';
import ButtonOutline from "./misc/ButtonOutline.";
import CarsData from "./CarsData";
import CarCard from "./CarCard";
import Dropdown from "./misc/Dropdown";
import SearchBar from "./misc/SearchBar";
import { carBrands, locations, maxyear, minyear, rentaltype, minprice, maxprice} from "./Constants";
import Modal from "./misc/Modal";
import {TiTick} from 'react-icons/ti'
import {AiOutlineClose} from 'react-icons/ai'

const Hero = () => {

const [viewDetails, setViewDetails] =useState([])
const [modal, setModal]= useState(false)
const [stepper, setStepper] = useState(false)
const [viewStepper, setViewStepper] = useState("")
const [currentStep, setCurrentStep ] = useState(1);
const [complete, setComplete] = useState(false);
const [heroData, setHeroData] = useState({
    rentAny: false,
    rentPerhour: false,
    rentPerday: false,
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
    transAny: false,
    transManual: false,
    transAuto: false,
  })

  const [stepperData, setStepperData] = useState({
      fName: "",
      lastName: "",
      user_email:"",
      nationalId: "",
      phoneNumber: "",
      age: "", 
      pickupLocation:"",
      pickupdate: "",
      returndate: ""
    })
  
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
  //  <PersonalDetails/>
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
      <> 
      <h2 className='flex justify-start font-medium ml-4 '>Pickup Information</h2>
      <form className="w-full border-2 border-gray-100 ml-4 mb-4 ">
        <div className=" flex justify-between  my-8 ">
        
        <div className="flex flex-col w-1/4">
        <label className="flex ml-3 mt-4 font-medium justify-start" htmlfor="pickupLocation">Pickup Location:</label>
        <select
                id="pickupLocation"
                value={stepperData.pickupLocation}
                onChange={handleStepperChange}
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

        <div className="flex flex-col w-1/3">
        <label className="flex ml-3 mt-4 font-medium justify-start" htmlForfor="pickupdate">Pickup Date:</label>
        <input 
           type="datetime-local"
           id="pickupdate"
           name="pickupdate"
           value={stepperData.pickupdate}
           onChange={handleStepperChange}
           className="w-5/6 h-10 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
           />  
        </div>

        <div className="flex flex-col w-1/3">
        <label className="flex ml-3 mt-4 font-medium justify-start" htmlfor="returndate">Return Date:</label>
        <input 
          type="datetime-local"
          id="returndate" 
          name="returndate"
          value={stepperData.returndate}
          onChange={handleStepperChange}
          className="w-5/6 h-10  flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
           />    
        </div>
          </div>   
      </form>
      </>
    );
  }
  
  function Confirmation() {
    return(
      <> 
      <h2 className='flex justify-start font-medium ml-8 '>Verify your information</h2>
      <div className="w-1/2 border-2 m-6 border-gray-100  flex flex-col justify-center">
      <div className="m-4 flex flex-col justify-start ">
      <h2>Name: {stepperData.fName} {stepperData.lastName}</h2>
      <h2>Phone: {stepperData.phoneNumber}</h2>
      <h2>National ID: {stepperData.nationalId}</h2>
      <h2>Email: {stepperData.user_email}</h2>
      <h2>Age: {stepperData.age}</h2>
      <h2>Pickup Location: {stepperData.pickupLocation}</h2>
      <h2>Pickup Date: {stepperData.pickupdate}</h2>
      <h2>Return Date: {stepperData.returndate}</h2>
      </div>
      </div>
      </>
    )
  }
  
  const steps = ['User details' , 'Pickup Info' , 'Confirmation'];

  function getSectionComponent() {
    switch(currentStep) {
      case 1: return <UserDetails/>;
       case 2: return <Pickup/>;
      case 3: return <Confirmation/>;
      default: return null;
    }
  }

   //View car details
    const showMoreDetails = (item)=>{
    setViewDetails([...viewDetails,{...item}])
    toggleModal()
    }
  
    // Set Modal
    const toggleModal = () =>{
    setModal(!modal, viewDetails.length=0)
    }

    //Show stepper
    const showStepper =(item) =>{
      setViewStepper([...viewStepper, {...item}])
      toggleStepper()
    }

    //set Stepper
    const toggleStepper =() =>{
      setStepper(!stepper)
    }


  const [search, setSearch] = useState("") 
  const [selectedCategory, setSelectedCategory] = useState("");

  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.checked ? "Manual" : "" );
  // };
  

  function handleChange(event) {
    console.log(event)
    const {name, value, type, checked} = event.target
    setHeroData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

  const filteredData = CarsData.filter((car) => {
  if (heroData.minPrice !== "" && heroData.maxPrice !== ""){
  return (car.price >= heroData.minPrice && car.price <= heroData.maxPrice )
   }
   
  if (heroData.minYear !== "" && heroData.maxYear !== ""){
    return (car.year >= heroData.minYear && car.year <= heroData.maxYear )
    }


 if(heroData.transAuto === true && heroData.transManual === true ){
    return true
    }

 if(heroData.transManual === true){
  return(car.transmission === "Manual")
 }

if(heroData.transAuto === true){
  return(car.transmission === "Automatic")
 }

//  if ((heroData.minPrice !== "" && heroData.maxPrice !== "") && (heroData.minYear !== "" && heroData.maxYear !== "") ){
//   return (
//     ((car.price >= heroData.minPrice && car.price <= heroData.maxPrice ) && (car.year >= heroData.minYear && car.year <= heroData.maxYear ))
//   )
//  }
  else {return true;}       
  });

  return (
    <div className="mt-24 px-4 xl:px-8 mx-4 w-full  border-solid border-4 border-white-500" id="home">

    <div className="w-full flex justify-end">
      <SearchBar/>
    </div>

            <div className="flex w-full justify-between">
            <div className=" flex flex-col w-1/4 border-solid border-1 border-gray-100 rounded-lg  bg-white-500 p-3 mt-4">
              <div className="flex justify-between w-full p-2 border-b-2 border-gray-100">
                 <h3 className="font-semibold">Filters</h3>
                 <div className="flex text-sm">
                 <GrPowerReset className="mt-1 mr-1"/>
                  <p className="">Reset All</p>
                 </div> 
              </div>

              <div className="w-full mt-4 mb-4  border-b-2 border-gray-100">
                <h3 className="font-medium ml-4 mb-2">RENTAL TYPE</h3>
                <div className=" flex w-2/3 justify-between mt-1 mb-4">

                <ul className="w-48 text-sm font-medium rounded-lg dark:bg-gray-300 dark:text-white">
                <li className="w-full rounded-t-lg">
                <div className="flex items-center pl-3 mt-0">
  
                <input 
                  type="checkbox" 
                  id="rentAny" 
                  checked={heroData.rentAny}
                  onChange={handleChange}
                  name = "rentAny"
                  className="w-4 h-4 text-blue-600 bg-blue-500 rounded "
                />
                <label htmlFor="any" className="w-full py-2 ml-2 text-sm font-medium ">Any </label> 
                </div>
              </li>
              <li className="w-full rounded-t-lg ">
                <div className="flex items-center pl-3">
                  <input 
                   type="checkbox" 
                   id="rentPerhour" 
                   checked={heroData.rentPerhour}
                   onChange={handleChange}
                   name = "rentPerhour"
                   className="w-4 h-4 text-blue-600 bg-blue-500 rounded "
                />
                  <label htmlFor="rentPerhour" className="w-full py-2 ml-2 text-sm font-medium ">Per Hour</label>
                </div>
              </li>

              <li className="w-full rounded-t-lg ">
                <div className="flex items-center pl-3">
                  <input 
                    type="checkbox" 
                    id="rentPerday" 
                    checked={heroData.rentPerday}
                    onChange={handleChange}
                    name = "rentPerday"
                    className="w-4 h-4 text-blue-600 bg-blue-500 rounded "
                />
                  <label htmlFor="rentPerday" className="w-full py-2 ml-2 text-sm font-medium ">Per Day</label>
                </div>
              </li>
              </ul>
                </div>
              </div>

              <div>
              <h3 className="font-medium ml-4">PRICE RANGE</h3>
              <div className="flex justify-between w-full ml-2">
               <select
                id="minPrice"
                value={heroData.minPrice}
                onChange={handleChange}
                name="minPrice"
                className="w-2/5 h-10 mt-1 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               >
                <option value="">Min Price</option>
                <option value="500">R500</option>
                <option value="1000">R1 000</option>
                <option value="2000">R2 000</option>
                <option value="3000">R3 000</option>
                <option value="4000">R4 000</option>
                <option value="5000">R5 000</option>
                <option value="8000">R8 000</option>
                <option value="10000">R10 000</option>
                <option value="15000">R15 000</option>
                <option value="20000">R20 000+</option>
               </select>
                
               <select
                id="maxPrice"
                value={heroData.maxPrice}
                onChange={handleChange}
                name="maxPrice"
                className="w-2/5 h-10 mt-1 mr-3 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white text-center shadow-md sm:text-sm border outline-none"
               >
                <option value="">Max Price</option>
                <option value="500">R500</option>
                <option value="1000">R1 000</option>
                <option value="2000">R2 000</option>
                <option value="3000">R3 000</option>
                <option value="4000">R4 000</option>
                <option value="5000">R5 000</option>
                <option value="8000">R8 000</option>
                <option value="10000">R10 000</option>
                <option value="15000">R15 000</option>
                <option value="20000">R20 000+</option>
               </select>
                </div>
              </div>

              <div className="w-full mt-4  border-t-2 border-gray-100">
              <h3 className="font-medium mt-4 ml-4">YEAR</h3>
              <div className="flex justify-between w-full ">
              <select
                id="minYear"
                value={heroData.minYear}
                onChange={handleChange}
                name="minYear"
                className="w-2/5 h-10 mt-1 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-2 text-center shadow-md sm:text-sm border outline-none"
               >
                 <option value="">Min Year</option>
                 <option value="2023">2023</option>
                 <option value="2022">2022</option>
                 <option value="2021">2021</option>
                 <option value="2019">2019</option>
                 <option value="2018">2018</option>
                 <option value="2017">2017</option>
                 <option value="2016">2016</option>
                 <option value="2015">2015</option>
                 <option value="2014">2014</option>
                 <option value="2013">2013</option>
                 <option value="2012">2012</option>
                 <option value="2011">2011</option>
                 <option value="2010">2010</option>
               </select>

               <select
                id="maxYear"
                value={heroData.maxYear}
                onChange={handleChange}
                name="maxYear"
                className="w-2/5 h-10 mt-1 mr-3 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
               >
                 <option value="">Max Year</option>
                 <option value="2023">2023</option>
                 <option value="2022">2022</option>
                 <option value="2021">2021</option>
                 <option value="2019">2019</option>
                 <option value="2018">2018</option>
                 <option value="2017">2017</option>
                 <option value="2016">2016</option>
                 <option value="2021">2015</option>
                 <option value="2019">2014</option>
                 <option value="2018">2013</option>
                 <option value="2017">2012</option>
                 <option value="2016">2011</option>
                 <option value="2016">2010</option>
               </select>

              </div>              
              </div>

              <div className="w-full mt-4 mb-4 border-t-2 border-b-2 border-gray-100">
                <h3 className="font-medium  ml-4 mt-4">TRANSMISSION</h3>
                <div className="flex w-2/3 justify-between mb-1">
                <ul className="w-48 text-sm font-medium rounded-lg dark:bg-gray-300 dark:text-white">
                <li className="w-full rounded-t-lg mt-0 ">
                <div className="flex items-center pl-3 mt-0">
                    <input 
                    type="checkbox" 
                    id="transAny" 
                    checked={heroData.transAny}
                    onChange={handleChange}
                    name = "transAny"
                    className="w-4 h-4 text-blue-600 bg-blue-500 rounded "
                />
                  <label htmlFor="transAny" className="w-full py-2 ml-2 text-sm font-medium ">Any</label>
                </div>
              </li>
              <li className="w-full rounded-t-lg ">
                <div className="flex items-center pl-3">
                <input 
                    type="checkbox" 
                    id="transManual" 
                    checked={heroData.transManual}
                    onChange={handleChange}
                    name = "transManual"
                    className="w-4 h-4 text-blue-600 bg-blue-500 rounded "
                />
                  <label htmlFor="transManual" className="w-full py-2 ml-2 text-sm font-medium ">Manual</label>
                </div>
              </li>

              <li className="w-full rounded-t-lg ">
                <div className="flex items-center pl-3">
                <input 
                    type="checkbox" 
                    id="transAuto" 
                    checked={heroData.transAuto}
                    onChange={handleChange}
                    name = "transAuto"
                    className="w-4 h-4 text-blue-600 bg-blue-500 rounded "
                />
                  <label htmlFor="transAuto" className="w-full py-2 ml-2 text-sm font-medium ">Automatic</label>
                </div>
              </li>
              </ul>
              </div>
              </div>

              <div className="w-full mb-4 border-b-2 border-gray-100">
                <h3 className="font-medium  mb-2 mt-4">FUEL TYPE</h3>
                <div className=" flex w-full justify-between mt-1 mb-4 mr-4">
                    <ButtonPrimary>Any</ButtonPrimary>
                    <ButtonPrimary>Petrol</ButtonPrimary>
                    <ButtonPrimary>Diesel</ButtonPrimary>
                    <ButtonPrimary>Electric</ButtonPrimary>
                    <ButtonPrimary>Hybrid</ButtonPrimary>
                </div>
              </div>
            </div> 

             <div className="flex flex-col w-3/4 ml-8 mt-4  border-solid  border-1 border-gray-100 rounded-lg bg-white-500 p-3">
             <div className="flex justify-between w-full p-2 border-b-2 border-gray-100">
                <p>Results: 10</p>
                <p>Sort By: Default</p>
              </div>

              <div>
                <div className="w-full grid grid-cols-3 gap-4">
                {filteredData
                     .filter((item) => { 
                      return search.toLocaleLowerCase() === ""
                      ? item
                      :item.name.toLocaleLowerCase().includes(search)
                     }) .map((item) =>{
                  return(
                    <div className='flex flex-col w-4/5 border-solid border-2 border-gray-100 rounded-lg m-2 p-2 mb-4 bg-white-300 shadow-md hover:shadow-xl' key={item.id}>
                    <h2 className="font-medium">{item.name}</h2>
                    <img className="w-full h-3/4" src={item.image} alt="car image"/>
                    <div className='flex w-full  justify-between mt-2 text-sm'>
                      <p>{item.transmission}</p>
                      <p>{item.fueltype}</p>
                      <p className="font-medium">R{item.price}/day</p>
                      {(heroData.rentPerday) && <p className="font-medium">R{item.dayprice}/day</p>}
                      {(heroData.rentPerhour) && <p className="font-medium">R{item.hourprice}/hr</p>}
                    </div>
                    <div className="flex justify-between mt-2">
                      <button className="px-3 py-1 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500"  onClick={() =>showStepper(item)}>Rent</button>
                      <button className="px-3 py-1 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500" onClick={() =>showMoreDetails(item)}>More Details</button>
                    </div>
                </div>
                  )
                 })}  
                 </div>               
              </div>

    <>
    {modal && (
    <div>
       <div className='fixed insert-0 bg-black-600 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-0 right-0 z-50'></div>
      <div className='w-full h-full fixed top-10 right-10 z-50'></div>
        <div className='w-4/5 h-6/7 fixed top-4 right-10  border-2 border-gray-100 z-50 bg-white-300'>
          <div className='relative overflow-y-scroll bg-white-500 w-full top-12 h-full'>
             {viewDetails.map((item) =>(
                <div className='flex w-full m-4 border-2 border-gray-100  h-5/6
                 bg-white-500'>
                    <div className='w-2/5 m-1 p-2'>
                     <h1 className='font-bold text-xl uppercase m-4'>{item.name}</h1>
                    <img className='w-full h-3/4' src={item.image}/>
                    </div> 
                    <div className=" w-1/2 ml-10 mt-1">
                        <p>Fuel: {item.fueltype}</p>
                        <p>Transmission: {item.transmission}</p>
                        <p>Seats: {item.seats}</p>
                        <p>Color: {item.color}</p>
                        <p>Body type: {item.bodyType}</p>
                        <p>Air-Con: {item.aircon}</p>
                        <p>Top speed: {item.topSpeed}km/h</p>
                        <p>Full tank capacity: {item.fullTank}</p>

                        <h2 className='mt-10 font-semibold text-lg'>Description</h2>
                        <p>HYNDAI ACCENT 2017 YEAR MODEL 1.6 gls MANUAL VEHICLE IS IMMACULATE CONDITION ,INTERIOR IS NEAT,DRIVE WELL,NEW TYRES AIRCON POWERSTEERING ELECTRIC WINDOWS CENTRAL LOCKING FACTORY RADIO CD ALARM MULTI FUNCTIONAL STEERING FOGS. <br/>
                        This vehicle will be certified as roadworthy by the dealer.</p>

             <button className="my-6 px-3 py-1 text-sm font-normal text-blue-400 bg-white border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:text-white-500" onClick={toggleStepper}>Rent Now</button>
                    </div>                  
                </div>
              ))} 
          </div>
           <button className='absolute top-2 right-4 cursor-pointer p-1 border-2 border-blue-500' onClick={toggleModal}>
            <AiOutlineClose size={24}/>
            </button>
        </div>
        </div>
        )}
        </>
       

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
            <h1 className="text-blue-400 mr-2">RentACar</h1> <h1>Application Form</h1>
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
              {currentStep === steps.length ? "Submit" : "Next"}
              </button>
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
  );
};

export default Hero;
