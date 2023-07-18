import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {BiChevronDown, BiCheck} from 'react-icons/bi'

export default function Dropdown({title, options}) {
  const [selected, setSelected] = useState(options[0])

  //console.log(selected)

  return (
    <div className='flex justify-between w-fit p-2'>
      <Listbox value={selected} onChange={setSelected}>
        {/* <div className='relative w-fit z-10'> */}
        <div className='relative w-fit'>
          
        <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default border-solid border-gray-500 rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            </span>
            <BiChevronDown size={20}/> 
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, Index) => (
                <Listbox.Option
                  key={Index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-300 text-white-500' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {/* {option.value ? (option.value) : (option.title)}  */}
                        {option.value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          < BiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}