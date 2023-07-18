import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { carBrands } from '../Constants'

const SearchCarModel = ({carBrand, model, setModel}) => {
const [query, setQuery]= useState("")

const filteredModelNames =
query === ""
? carBrand
:carBrand.filter((item) =>(
 item.name.models
 .toLocaleLowerCase()
 .replace(/\s+/g, "")
 .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
))

return (
    <div className='flex justify-start items-center'>
      <Combobox  value={model} onChange={setModel} >
        <div className='relative w-full'>
          <Combobox.Input
             className="w-full  pl-12 p-4 rounded-l-full bg-light-white outline-none cursor-pointer text-sm border-solid border-2 border-gray-500"
             placeholder='Car Brand'
             displayValue={(item) => item.name}
             onChange={(event) => setQuery(event.target.value)} 
          />

            <Transition
           as={Fragment}
           leave='transition ease-in duration-100'
           leaveFrom='opacity-100'
           leaveTo='opacity-0'
           afterLeave={() =>setQuery('')}
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
                 {/* {item} */}
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
      </div>
  )
}


export default SearchCarModel