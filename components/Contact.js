import{ useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      user_email:"",
      subject: "",
      message: ""
    }
  )

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_kzdxi1t', 'template_d4l2j7h', form.current, 'sJYfdO-AY49sTRP9S')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
          form.current.reset();

      }, (error) => {
          console.log(error.text);
      });
  };


  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
     }
   })
}
  return (
     <div> 
      <h1 className='flex justify-center text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'>Contact Us</h1>
    <div className=' flex  w-full justify-evenly m-5  p-4' id="contact"> 
    <div className='w-1/2 flex text-black-600'>
    <form ref={form}  onSubmit={sendEmail} className='w-3/4 flex flex-col border-2 border-gray-100 '>
      <div className='flex w-full justify-between'>
        <input 
         type="text" 
         name="firstName" 
         placeholder='First Name'
         //onChange={handleChange}
         //value={formData.firstName}
         className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
        />

         <input 
         type="text" 
         name="lastName" 
         placeholder='Last Name'
         //onChange={handleChange}
         value={formData.lastName}
         className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
        /> 
      </div>
        <input type="email" 
        name="user_email" 
        placeholder='Email' 
         //onChange={handleChange}
         //value={formData.user_email}
        className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'/>

         <input 
         type="text" 
         name="subject" 
         placeholder='Subject'
         //onChange={handleChange}
         //value={formData.subject}
         className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 placeholder-black-600'
        /> 

        <textarea 
        name="message" rows="6" 
        placeholder="Type your message here" 
        //onChange={handleChange}
        //value={formData.message}
        className='p-2 m-4 border-b-2 border-gray-100 outline-none opacity-50 focus:border-blue-500 bg-white-500 placeholder-black-600'/>

        <button className="w-1/3 px-3 py-2 mb-3 ml-2 font-normal text-white-300 border-2 border-blue-300 rounded-lg bg-blue-400  hover:bg-white-500 hover:text-blue-500">Send</button>
    </form> 
    </div>
    
    <div className='w-1/3 mt-2'>
      <h1 className=' sm:text-3xl lg:text-2xl mb-2'>South Africa</h1>
      <h3>Address</h3>
      <p className='mb-3 text-sm'>Noordwyk, Midrand, Gauteng, South Africa</p>
       <h3>Phone</h3>
       <p className='mb-3 text-sm'>Call us toll free +270 000 0000</p>
      <h3>Email</h3>
      <p className='mb-2 text-sm'>admin@blufountain.com</p>
    </div> 
    </div>
    </div>
  )
}

export default Contact