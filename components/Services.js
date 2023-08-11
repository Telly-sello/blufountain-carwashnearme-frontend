import React from 'react'

const Services = () => {
  return (
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left ">
 <thead class="text-medium  uppercase ">
     <tr>
         <th scope="col" class="px-6 py-3">
             #
         </th>
         <th scope="col" class="px-6 py-3">
            Service
         </th>
         <th scope="col" class="px-6 py-3">
             Price Sedan
         </th>

         <th scope="col" class="px-6 py-3">
         Price SUV & Double Cab
         </th>
         <th scope="col" class="px-6 py-3">
          Price Van & Minibus
         </th>
     </tr>
 </thead>
 <tbody>
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
 </tbody>
</table>
</div>
  )
}

export default Services