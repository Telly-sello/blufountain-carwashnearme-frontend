import { useState } from "react"
import ButtonOutline from "./misc/ButtonOutline."
import CarsData from "./CarsData"

const CarCard = (props) => {

  return (
    <div className='flex flex-col w-4/5 border-solid border-2 border-gray-100 rounded-lg m-2 p-2 mb-4 bg-white-300 shadow-md hover:shadow-xl'>
        <h2 className="font-medium">{props.name}</h2>
        <img className="w-full h-full" src={props.image} alt="car image"/>
        <div className='flex w-full  justify-between mt-2 text-sm'>
          <p>{props.transmission}</p>
          <p>{props.fuelType}</p>
          <p className="font-medium">R{props.price}/day</p>
        </div>
        <div className="flex justify-between mt-2">
          <ButtonOutline >Rent</ButtonOutline>
          <ButtonOutline onClick={showMoreDetails}>More Details</ButtonOutline>
        </div>
    </div>
  )
}

export default CarCard
