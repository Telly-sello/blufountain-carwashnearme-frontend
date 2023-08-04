import React from 'react'
import { Branches } from './CarWashData'
import Link from "next/link";

const BranchesCard = (props) => {

  const handleInput =(e) =>{
    console.log(e.target); 
}

  const branchList = Branches.map( branch =>{
    return (
      <div  className='flex flex-col w-4/5 items-center border-solid border-2 border-gray-100 rounded-lg m-2 p-2 mb-4 bg-white-300 shadow-md hover:shadow-xl'>
        <img className="w-full h-full" src={branch.image} alt="car image"/>
        <Link  href={{
          pathname: "/branches",
          query:{
            id: branch.id,
            name : branch.name
          }
        }}>
        <button  onClick={(e)=> console.log(branch.id)} value='1' className="font-medium border-b-2 border-gray-100 m-3 w-full hover:text-blue-500 cursor-pointer">{branch.name}</button>
        </Link>
        <h2 className="text-sm ml-3 text-black-500 ">{branch.location}</h2>
      </div>
    )
  })

  return ( 

    <div className='flex flex-col items-center w-full'>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed border-b-2 border-blue-500 mb-10'>Our Branches</h1>
    <div className="w-3/4 grid grid-cols-3 gap-4">
    {branchList}
    </div>
</div>
  )
}

export default BranchesCard


