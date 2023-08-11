'use client'

import React, { useEffect, useMemo, useState } from "react";
import { slides } from "../components/Constants";
import CarWashData from "../components/CarWashData";
import {TiTick} from 'react-icons/ti'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import BranchesCard from "../components/BranchesCard";
import swal from "sweetalert";
import Swal from "sweetalert2";
import axios from "axios";
import { Drawer,Tabs, Steps, Tooltip } from "antd"
import About from "./About";
import Contact from "./Contact";

const Hero = () => {

const [viewDetails, setViewDetails] =useState([])
const [modal, setModal]= useState(false)
const [stepper, setStepper] = useState(false)
const [viewStepper, setViewStepper] = useState("")
const [currentStep, setCurrentStep ] = useState(1);
const [current, setCurrent] = useState(0);
const [complete, setComplete] = useState(false);
const [viewBookings, setViewBookings] = useState(null)
const [visibl2, setVisibl2] =useState('')
const [cancelBooking, setCancelBooking] =useState(null)
const [visibleCancel, setVisibleCancel] = useState('')
const [reschedule, setReschedule] =useState(null)
const [visibleReschedule, setVisibleReschedule] = useState('')
const [selectedOption, setSelectedOption] = useState("");
const [inputValue, setInputValue] = useState("");

const selectedId = window.location.search
const urlParams = new URLSearchParams(selectedId)
const param1= urlParams.get('id')
const param2= urlParams.get('name')
console.log(param1)
console.log(param2)

const [allbookings, setBookings] = useState([]);
const [userData, setUserData] = useState({
  date:"",
  time: "",
  service:""
})

const selectedLocation =()=> {
  switch(param1) {
    case 1: return "Centurion";
     case 2: return "BedfordView";
    case 3: return "Midrand";
    default: return "Centurion";
  }
}

const [heroData, setHeroData] = useState({
    location: selectedLocation(),
    bodytype: false,
    service: false,
  })


  const [stepperData, setStepperData] = useState({
      firstName: "",
      lastName: "",
      email:"",
      phoneNumber: "",
      date: "",
      time: ""
    })
  
  function handleStepperChange(event) {
    setStepperData(prevData => {
        return {
            ...prevData,
            [event.target.name]: event.target.value
     }
   })
}


  const UserDetails =() => {
    return (
  <> 
  <h2 className='flex justify-start font-medium ml-4 '>User Details</h2>
  <div className="w-full flex justify-start">
   <form className='w-2/3 flex flex-col border-2 mb-2 border-gray-500 m-3'>
  <div className='flex w-full justify-between'>
    <input 
     type="text" 
     name="firstName" 
     placeholder='First Name'
     onChange={handleStepperChange}
     value={stepperData.firstName}
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
     name="phoneNumber" 
     placeholder='Phone Number'
     onChange={handleStepperChange}
     value={stepperData.phoneNumber}
     className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
    /> 

    <input type="email" 
    name="email" 
    placeholder='Email' 
     onChange={handleStepperChange}
     value={stepperData.email}
    className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>
    </div>
    </form>
  </div>
  </>
    );
  }

 const  Pickup =() =>{
    return(
      <> 
      <h2 className='flex justify-start text-base font-bold m-4'>Carwash Information</h2>
      <form className="w-full border-2 border-gray-100  mb-4 ">
        <div className=" flex justify-between  my-2 ">
        <div className="flex flex-col w-1/3">
        <label className="flex ml-3 mt-1 font-bold justify-start" htmlForfor="date">Date:</label>
        <input 
           type="date"
           id="date"
           name="date"
           value={stepperData.date}
           onChange={handleStepperChange}
           className="w-5/6 h-10 flex items-center cursor-default border-solid border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
           />  
        </div>

      <div className="flex flex-col w-2/3 ">
      <label className="flex  mt-1 font-bold justify-start ml-10" htmlfor="returndate">Available time Slots:</label>     

      <div className="w-4/5  border-2 border-gray-100 ml-10">
        <div className="flex justify-between">
        <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                <input
                  className=""
                  type="radio"
                  name="time"
                  value = "8:00 - 10:00"
                  id="8:00 - 10:00"
                  checked={stepperData.time === "8:00 - 10:00"}
                  onChange={handleStepperChange}
                />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="8:00 - 10:00"
                >
                  8:00 - 10:00
                </label>
              </div>

              
             <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                <input
                  className=""
                  type="radio"
                  name="time"
                  value = "10:00 - 12:00"
                  id="10:00 - 12:00"
                  checked={stepperData.time === "10:00 - 12:00"}
                  onChange={handleStepperChange}
                />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="10:00 - 12:00"
                >
                 10:00 - 12:00
                </label>
              </div>
              </div>

              <div className="flex justify-between">
        <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                <input
                  className=""
                  type="radio"
                  name="time"
                  value = "12:00- 13:00"
                  id="12:00- 13:00"
                  checked={stepperData.time === "12:00- 13:00"}
                  onChange={handleStepperChange}
                />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="12:00- 13:00"
                >
                 12:00- 13:00
                </label>
              </div>

              
             <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                <input
                  className=""
                  type="radio"
                  name="time"
                  value = "13:00 - 14:00"
                  id="13:00 - 14:00"
                  checked={stepperData.time=== "13:00 - 14:00"}
                  onChange={handleStepperChange}
                />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="13:00 - 14:00"
                >
                 13:00 - 14:00
                </label>
              </div>
              </div>

         <div className="flex justify-between">
        <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                <input
                  className=""
                  type="radio"
                  name="time"
                  value = "14:00 - 15:00"
                  id="14:00 - 15:00"
                  checked={stepperData.time ==="14:00 - 15:00"}
                  onChange={handleStepperChange}
                />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="14:00 - 15:00"
                >
                  14:00 - 15:00
                </label>
              </div>

              
             <div class="mb-2 block min-h-[1.5rem] pl-2 mr-12">
                <input
                  className=""
                  type="radio"
                  name="time"
                  value = "15:00 - 16:00"
                  id="15:00 - 16:00"
                  checked={stepperData.time === "15:00 - 16:00"}
                  onChange={handleStepperChange}
                />
                <label
                  class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="15:00 - 16:00"
                >
                 15:00 - 16:00
                </label>
              </div>
              </div>             
        </div>
        </div>      
          </div>   
      </form>
      </>
    );
  }
  
  const Confirmation = () => {
    return(
      <> 
      <h2 className='flex justify-start m-4 text-base font-bold'>Verify your information</h2>
      <div className="w-1/2 border-2 m-6 border-gray-100  flex flex-col justify-center">
      <div className="m-4 flex flex-col justify-start text-base ">
      <h2>Name: {stepperData.firstName} {stepperData.lastName}</h2>
      <h2>Phone: {stepperData.phoneNumber}</h2>
      <h2>Email: {stepperData.email}</h2>
      <h2>Service: {heroData.service}</h2>
      <h2>Car Type: {heroData.bodytype}</h2>
      <h2>Date: {stepperData.date}</h2>
      <h2>Time: {stepperData.time}</h2>
      <h2>Amount: R {Prices()}</h2>
      </div>
      </div>
      </>
    )
  }
  
//const steps = ['User details' , 'Carwash info' , 'Confirmation'];

 const getSectionComponent = () => {
    switch(currentStep) {
      case 1: return <UserDetails/>;
      case 2: return <Pickup/>;
      case 3: return <Confirmation/>;
      default: return null;
    }
  }

  //view bookings drawer
    const showDrawer2 = (viewBookings)=> {
    setViewBookings([viewBookings]);
    setVisibl2(true);
      };
      const onClose2 = () => {
        setVisibl2(false);
      };


  //Cancel Booking drawer
   const showCancel = (cancelBooking) => {
    setCancelBooking(cancelBooking);
    setVisibleCancel(true)
   }

  const onClose1 = () => {
    setVisibleCancel(false);
  };

  // Reschedule Drawer/////////////////////
  const showReschedule = (reschedule) => {
    setReschedule(reschedule);
    setVisibleReschedule(true)
   }

  const onClose3 = () => {
    setVisibleReschedule(false);
  };


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

  const filteredData = CarWashData.filter((place) => {
  if (heroData.location !== "" && heroData.location === place.name){
  return true
   }
  });

  let price
  function Prices(){
      if(heroData.bodytype === "Sedan" && heroData.service === "wash & go"){price = 70;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "wash & go"){price = 80}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "wash & go"){price = 100}

      if(heroData.bodytype === "Sedan" && heroData.service === "wash dry"){ price = 90;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "wash dry"){price = 100}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "wash dry"){price = 120}
 
      if(heroData.bodytype === "Sedan" && heroData.service === "wash, dry & tyres"){ price = 100;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "wash, dry & tyres"){price = 120}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "wash, dry & tyres"){price = 130}
      
      if(heroData.bodytype === "Sedan" && heroData.service === "basic wash"){ price = 110;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "basic wash"){price = 130}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "basic wash"){price = 140}
      
      if(heroData.bodytype === "Sedan" && heroData.service === "super wash"){ price = 120;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "super wash"){price = 140}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "super wash"){price = 150}

      if(heroData.bodytype === "Sedan" && heroData.service === "wash & wax"){ price = 130;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "wash & wax"){price = 150}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "wash & wax"){price = 160}

      if(heroData.bodytype === "Sedan" && heroData.service === "Full Valet"){ price = 200;}
      if(heroData.bodytype === "SUV/Double cab" && heroData.service === "Full Valet"){price = 250}
      if(heroData.bodytype === "Van/Minibus" && heroData.service === "Full Valet"){price = 300}
      return price
  }

  //Slider
  const [currentSlide, setCurrentSlide]=useState(0)
  const slideLength = slides.length
 
  const autoScroll =true
  let slideInterval
  let intervalTime = 5000
 
  const nextSlide = () =>{
   setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide +1)
  }
 
  const prevSlide = () =>{
   setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide - 1)
  }
 
   function auto(){
     slideInterval = setInterval(nextSlide, intervalTime)
   }
 
  useEffect(() => {
   setCurrentSlide(0)
  }, [])
 
  useEffect(() => {
   if (autoScroll){
     auto()
   }
   return () => clearInterval(slideInterval)
  }, [currentSlide])

  const sendEmail = async () => {
    try {
         await fetch(`http://localhost:8081/sendEmail/confirmProfileEmail?recipient=${stepperData.email}&subject=Test`, {
          mode: 'no-cors',
          method: 'POST' 
        }).then((response)=>{ 
          console.log(response.data)
          if(response.data === `Email Sent to : ${stepperData.email}`){
            alert("message sent") 
          } else{
            console.log("Network Error")
          }
        });
    } catch (error) {
        // setIsError(true)
        console.log(error)
    }  
}

const initialState = {
  /* etc */
};

const Reset = () =>{
 setHeroData(initialState)
}

///Database
const sessionSuccess = () => {
  swal({
    title: "Successful!",
    text: "Your booking submitted successfully!",
    icon: "success",
  });
  toggleStepper()
  x;
};

const sessionError = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
};

const handleSubmit1 = () => {
  const reqObject = {
     firstName: stepperData.firstName,
     lastName: stepperData.lastName,
     email: stepperData.email,
     phoneNumber: stepperData.phoneNumber,
     date: stepperData.date,
     time: stepperData.time,
     location: heroData.location,
     service: heroData.service,
     bodyType:heroData.bodytype,
     Price: Prices(),
     referenceNumber: "RF" + Math.floor(Math.random() * 9999999)
  };

  axios.post("http://localhost:3300/api/PostBooking", reqObject)
  .then((promise) => {
    sessionSuccess();
    console.log(reqObject);
  })
  .catch((error) => {
    // sessionError();
    console.log(error);
  });
};

const buttonClick = () => {
handleSubmit1();
sendEmail();
}


const handlSubmit= (reschedule) => {
  const reqObj = {
    firstName: reschedule.firstName,
    lastName: reschedule.lastName,
    email: reschedule.email,
    phoneNumber:  reschedule.phoneNumber,
    date: userData.date,
    time: userData.time,
    location: reschedule.location,
    service: userData.service,
    bodyType: reschedule.bodyType,
    Price: reschedule.Price,
    id: reschedule._id
  };
  axios
    .post("http://localhost:3300/api/rescheduleBooking", reqObj)
    .then((promise) => {
      sessionAppointmentRescheduled();
      console.log(reqObj);
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleSubmit = (cancelBooking) => {
  const reqObject = {
    firstName: cancelBooking.firstName,
    lastName: cancelBooking.lastName,
    email: cancelBooking.email,
    date: cancelBooking.date,
    time: cancelBooking.time,
    location: cancelBooking.location,
    service: cancelBooking.service,
    bodyType: cancelBooking.bodyType,
    Price: cancelBooking.Price,
    id: cancelBooking._id
  };
  axios
    .post("http://localhost:3300/api/cancelBooking", reqObject)
    .then((promise) => {
      sessionAppointmentCancelled();
      console.log(reqObject);
    })

    .catch((error) => {
      console.log(error);
    });
};


function handlChange(event) {
  setUserData((prevFormDate) => {
    return {
      ...prevFormDate,
      [event.target.name]: event.target.value,
    };
  });
}

function handleSubmitt(event) {
  event.preventDefault();
  console.log(userData);
}

const sessionAppointmentRescheduled = () => {
  swal({
    title: "Successful!",
    text: "Appointment Successfully Resceduled!",
    icon: "success",
  });
  onClose3()
};

const sessionAppointmentCancelled = () => {
  swal({
    title: "Successful!",
    text: "Appointment Cancelled Successfully!",
    icon: "success",
  });
  onClose1()
};

  //Get Data from the database
  useEffect(() => {
    axios
      .get(`http://localhost:3300/api/PostBooking`)
      .then((response) => {
        const data = response.data;
        setBookings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const filteredBookings = allbookings
  // ?.filter(
  //   (booking) => booking?.firstName === "Ardlight "
  // );

  //Search by reference, date///////////////
  const filteredBookings1 = filteredBookings?.filter((booking) => {
    if (selectedOption === "reference") {
      return booking?.referenceNumber
        ?.toLowerCase()
        ?.includes(inputValue?.toLowerCase());
    } else if (selectedOption === "Booking Id") {
      return booking?._id
        ?.toLowerCase()
        ?.includes(inputValue?.toLowerCase());
    }
    return filteredBookings;
  });
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setInputValue("");
  };

  //////////////////Steps/////////////////////
const steps = [
  {
    title: "User Details",
    content:(
      <> 
  <h2 className='flex justify-start text-base font-bold m-4 '>User Details</h2>
  <div className="w-full flex justify-start">
   <form className='w-2/3 flex flex-col border-2 mb-2 border-gray-500 m-3 text-base'>
  <div className='flex w-full justify-between'>
    <input 
     type="text" 
     name="firstName" 
     placeholder='First Name'
     onChange={handleStepperChange}
     value={stepperData.firstName}
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
     name="phoneNumber" 
     placeholder='Phone Number'
     onChange={handleStepperChange}
     value={stepperData.phoneNumber}
     className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
    /> 

    <input type="email" 
    name="email" 
    placeholder='Email' 
     onChange={handleStepperChange}
     value={stepperData.email}
    className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>
    </div>
    </form>
  </div>
  </>
    ),
  },
  {
    title: "Book",
    content:<Pickup/>,
  },

  {
    title: "Review",
    content: <Confirmation/>,
  }
]

    //stepper
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));

///////////////////////TABS//////////////////////////////
const onChange = (key) => {
  console.log(key);
};

const items1 = [
  {
    key: '1',
    label: `HOME`,
    children: 
    <div>
      <div className="flex justify-end">
        <button className=" px-3 py-3 text-sm font-normal hover:text-blue-400 hover:bg-white-300 border-2 border-blue-300 rounded-lg bg-blue-400 text-white-500" onClick={() =>showDrawer2()}>
        MY BOOKINGS
      </button> 
      </div>
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
             <h2 className="font-medium text-base">Blufontain {item.name} carwash is located at {item.location}</h2>
            </div>

            <h3 className="ml-3 mt-2 text-sm">Physical Address: {item.physicalAddress}</h3>
            <h3 className="ml-3 text-sm ">Contact: {item.contact}</h3>

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
   <Tooltip placement="top" title="close" color="blue">
   <button className='absolute top-4 right-14 cursor-pointer p-1 border-2' onClick={onClose2}>
     <AiOutlineClose size={24} />
     </button>
     </Tooltip>
   </div>
    <h4 className="text-xl text-blue-500 mb-2 ">Car wash Bookings</h4>

    <div>
    <div class="flex flex-wrap -mx-3 mb-2 mr-2">
              <div className="relative w-full  justify-end flex ">
                <select
                  class="w-1/5 h-8  border-2 border-blue-500 mb-5  rounded "
                  id="grid-reason"
                  name="reason"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
                >
                  <option value="">--Search By--</option>
                  <option value="Booking Id">Booking ID</option>
                  <option value="Booked Date">Booked Date</option>
                  <option value="reference">Reference Number</option>
                </select>
                <input
                  id="search"
                  type="search"
                  placeholder="Search"
                  class="w-1/5 h-8  border-2 border-blue-500 mb-5  rounded ml-2  "
                  value={inputValue}
                  onChange={handleInputChange}
                />

                <div className="">
                  <button className="absolute right-2 top-2 translate-y-1/6 pl-4 pb-2  ">
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
              </div>
    </div>

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
 {filteredBookings1.map((dat, index) => {
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
 <Tooltip placement="top" title="close" color="blue">
   <button className='absolute top-4 right-6 cursor-pointer p-1 border' onClick={onClose1}>
     <AiOutlineClose size={20} />
     </button>
     </Tooltip>
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
   <Tooltip placement="top" title="close" color="blue">
   <button className='absolute top-4 right-6 cursor-pointer p-1 border' onClick={onClose3}>
     <AiOutlineClose size={20} />
     </button>
     </Tooltip>
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
          <>
            <div className="fixed insert-0 bg-black-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full h-full justify-self-center top-0 right-0  z-50 ">
              <div className="w-full flex flex-col h-4/5 justify-self-center fixed top-1/3 left-1/4 z-50 ">
                <Steps current={current} items={items} className="w-1/2 " />
                <div className="bg-white-500 w-1/2 ">
                  {steps[current].content}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="w-1/2 mt-4"
                >
                  {current < steps.length - 1 && (
                    <button type="primary" onClick={() => next()}>
                      <div className="font-medium cursor-pointer text-center tracking-wide py-2 mr-4 text-xs sm:px-2 w-24 border border-blue-500 text-sky-500 bg-white-500 outline-none  rounded-lg capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue ">
                        {" "}
                        Next
                      </div>
                    </button>
                  )}
                  {current === steps.length - 1 && (
                    <button
                      // onClick={() => message.success("Processing complete!")}
                    >
                      <div
                        onClick={buttonClick}
                        className="font-medium cursor-pointer text-center tracking-wide py-2 mr-4 text-xs sm:px-2 w-24 border border-blue-500 text-sky-500 bg-white-500 outline-none  rounded-lg capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
                      >
                        {" "}
                        Done
                      </div>
                    </button>
                  )}
                  {current > 0 && (
                    <button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      <div className="font-medium cursor-pointer text-center tracking-wide py-2 mr-4 text-xs sm:px-2 w-24 border border-blue-500 text-sky-500 bg-white-500 outline-none  rounded-lg capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue ">
                        {" "}
                        Previous
                      </div>
                    </button>
                  )}
                </div>
                <Tooltip placement="top" title="close" color="blue">
                <button className='fixed top-1/4 right-1/4  cursor-pointer p-1 border-2 hover:border-blue-500' onClick={toggleStepper}>
     <AiOutlineClose size={24}/>
     </button>
     </Tooltip>
              </div>
            </div>
          </>
        )}

</div> 
</div>
</div>
<BranchesCard />
<About/>
<Contact/>
</div>
  },
  {
    key: '2',
    label: `BRANCHES`,
    children: <BranchesCard />,
  },
  // {
  //   key: '3',
  //   label: `ABOUT US`,
  //   children: <About/>,
  // },

  // {
  //   key: '4',
  //   label: `CONTACT`,
  //   children: <Contact/>,
  // },
]
/////////////////////////////////END TABS///////////////////////////

  return (
    <>
    <div className="flex justify-between mt-40 w-full border border-gray-500">

    <div className = 'w-full'>
    <Tabs className = 'w-full font-sans'  defaultActiveKey="1" items={items1} onChange={onChange} /> 
    </div>
    </div>

  </>
  );
};

export default Hero;
