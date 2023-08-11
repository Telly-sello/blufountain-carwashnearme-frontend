import React, { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from '../components/firebase/firebaseApp'
import Link from "next/link";
import axios from "axios";
import swal from "sweetalert";
import { Drawer,Tabs, Steps, Tooltip } from "antd"
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Hero from "../components/Hero";


const Profile = () => {
 const app = initFirebase;
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [cancelBooking, setCancelBooking] =useState(null)
  const [visibleCancel, setVisibleCancel] = useState('')
  const [reschedule, setReschedule] =useState(null)
  const [visibleReschedule, setVisibleReschedule] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setInputValue("");
  };

  const sessionAppointmentRescheduled = () => {
    swal({
      title: "Successful!",
      text: "Appointment Successfully Resceduled!",
      icon: "success",
    });
    onClose3()
  };

  const [allbookings, setBookings] = useState([]);
  const [userData, setUserData] = useState({
    bookingDate: "",
    time: "",
    service: "",
  });

  function handleSubmitt(event) {
    event.preventDefault();
    console.log(userData);
  }
  console.log(userData);

  function handlChange(event) {
    setUserData((prevFormDate) => {
      return {
        ...prevFormDate,
        [event.target.name]: event.target.value,
      };
    });
  }

  useEffect(() => {
    axios
      .get('http://localhost:3300/api/PostBooking')
      .then((response) => {
        const data = response.data;
        setBookings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [drawerData, setDrawerData] = useState(null);
  const [visibl2, setVisibl2] = useState(false);

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
 
  const emailFilteredBooking = allbookings?.filter(
    (booking) => (booking?.email ===user?.email)
    
  ) || [];

  
//All Bookings
  const filteredBookings1 =emailFilteredBooking?.filter((booking) => {
    if (selectedOption === "reference") {
      return booking?.referenceNumber
        ?.toLowerCase()
        ?.includes(inputValue?.toLowerCase());
    } else if (selectedOption === "Booking Id") {
      return booking?.referenceNumber
        ?.toLowerCase()
        ?.includes(inputValue?.toLowerCase());
    }

    return emailFilteredBooking;
  });

  //Pending bookings
  let today = new Date().toISOString().slice(0, 10);
  console.log(today);
 let time = new Date().toLocaleTimeString();
  const PendingBookings = emailFilteredBooking?.filter(
    (booking) => booking?.date > today );

    //Previous Bookings
    const PreviousBookings = emailFilteredBooking?.filter(
    (booking) => booking?.date < today  );


  const sessionAppointmentCancelled = () => {
    swal({
      title: "Successful!",
      text: "Appointment Cancelled Successfully!",
      icon: "success",
    });
    onClose1()
  };

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

   ////// Tabs////////////
   const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Pending Bookings`,
      children: 
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left ">
 <thead class="text-medium  uppercase bg-gray-100">
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
 {PendingBookings.map((dat, index) => {
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
    },
    {
      key: '2',
      label: `Previous Bookings`,
      children:
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left ">
 <thead class="text-medium  uppercase bg-gray-100 ">
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
             Status
         </th>
     </tr>
 </thead>
 <tbody>
 {PreviousBookings.map((dat, index) => {
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
         <button className="text-blue-500">Done</button>
         </td>
     </tr>
         );
       })}
 </tbody>
</table>
</div>
    }, 
    {
      key: '3',
      label: `All Bookings`,
      children: 
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left ">
 <thead class="text-medium  uppercase bg-gray-100">
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
  
         {dat.date > today && (
                    <div>
                      <a href="#" onClick={() =>showCancel(dat)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Cancel</a>
                      <a href="#" onClick={() =>showReschedule(dat)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-4">Reschedule</a>
                      </div>
                  )}
         </td>

     </tr>
         );
       })}
 </tbody>
</table>
</div>
    }
  ]


  if (loading) {
    return (
      <div className="text-center h-screen flex justify-center items-center text-4xl">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    router.push("/");
    return (
      <div className="text-center h-screen flex justify-center items-center text-4xl">
        Please Sign in{" "}
      </div>
    );
  }

  return (
    <div className=" flex w-full justify-center items-center text-xl">
  <div className="h-screen w-full justify-between ">
 <div className="w-full flex justify-between">
 <div className="mb-5 flex justify-center items-center shadow-sm p-2 text-blue-500">
          <p> Welcome to your profile </p>{" "}
          <span className="pl-1"> {user.displayName} </span>
        </div>
     <button onClick={(signIn) => auth.signOut()}>
          <div className="font-medium cursor-pointer text-center tracking-wide py-2 mr-4  text-xs sm:px-2 w-24 border border-blue-500 text-blue-500 bg-white-500 outline-none  rounded-lg capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue">
            Sign out
          </div>
        </button>
 </div>

        {/* <Link href="/bookings"><button className=" px-3 py-3 text-sm font-normal hover:text-blue-400 hover:bg-white-300 border-2 border-blue-300 rounded-lg bg-blue-400 text-white-500">MY BOOKINGS</button></Link> */}

      <div className = 'w-full'>
     <Tabs className = 'w-full font-sans font-medium'  defaultActiveKey="1" centered items={items} onChange={onChange} /> 
    </div>
    <div className="top-0"><Hero/></div>
      </div>

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


    </div>
  );
};

export default Profile;