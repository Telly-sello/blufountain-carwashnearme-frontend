import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import SearchCarBrand from "./SearchCarBrand"
import SearchCarModel from "./SearchCarModel"
import { carBrands } from "../Constants"

const SearchBar = () => {
  const [carBrand , setcarBrand] = useState("")  
  const [model, setModel] = useState("")


  const handleSearch = () =>{
  
  }
  
  return (
       <form className="searchbar" onSubmit={handleSearch}> 
         <div className="w-full  flex justify-end items-center relative ">
          <SearchCarBrand
          carBrand ={carBrand}
          setcarBrand ={setcarBrand}
          />

          <div className='w-1/3 pl-12 p-4 rounded bg-light-white outline-none cursor-pointer text-sm border-solid border-2 border-gray-500'>
             <input
             placeholder='Car Model'
             className='outline-none'
             >    
             </input>
          </div>

          <div className='w-1/3 pl-12 p-4 rounded-r-full  bg-light-white outline-none cursor-pointer text-sm border-solid border-2 border-gray-500 bg-blue-300 text-white-300'>
             Search
          </div>
      
         {/* {carBrand &&(
               <div className='flex justify-start items-center'>  
                <Combobox  value={model} onChange={setModel} >
        <div className='relative w-full'>
          <Combobox.Input
             className="w-full pl-12 p-4 rounded bg-light-white outline-none cursor-pointer text-sm border-solid border-2 border-gray-500"
             placeholder='Car Model'
             displayValue={(item) => item.models}
             onChange={(event) => setQuery1(event.target.value)} 
          />

            <Transition
           as={Fragment}
           leave='transition ease-in duration-100'
           leaveFrom='opacity-100'
           leaveTo='opacity-0'
           afterLeave={() =>setQuery1('')}
          >
          
          <div className='border-solid border-2 border-blue-300'>
           <Combobox.Options>
              {filteredModelNames.map((item)=>(
              <Combobox.Option
              key={item.id}
              className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4
              ${active ? 'bg-blue-300 text-white-500': 'text-gray-900'}`}
              value = {item}
              >
                 
                  {({selected, active}) =>(
                  <>
                   <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                      {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                  </>

                 )}
               </Combobox.Option>
             ))}
           </Combobox.Options>
           </div>
          </Transition>               
        </div> 
      </Combobox>
               Model
               </div> */}
         {/* )
         } */}
         </div>

       </form>
  )
}

export default SearchBar