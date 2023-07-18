import React, { useState } from 'react'
import ButtonOutline from './ButtonOutline.'
import {AiOutlineClose} from 'react-icons/ai'


const Modal = ({modal, viewDetails, toggleModal}) => {
// const [viewDetails, setViewDetails] =useState([])
// const [modal, setModal]= useState(false)

// //View car details
// const showMoreDetails = (item)=>{
// setViewDetails([...viewDetails,{...item}])
// toggleModal()
// }
  
// //Set Modal
// const toggleModal =() =>{
// setModal(!modal, viewDetails.length=0)
//  }

 return (
  <>
  {modal && (
    <div className='flex w-full h-full border-2 border-blue-500 '>
      <div className='w-full h-full fixed top-10 right-10 z-50'></div>
        <div className='w-4/5 h-6/7 fixed top-4 right-10  border-2 border-gray-100 z-50 bg-gray-500'>
          <div className='relative overflow-y-scroll bg-white-300 w-full top-12 h-full'>
             {viewDetails.map((item) =>(
                <div className='flex w-full m-4 border-2 border-gray-100  h-5/6
                 bg-white-500'>
                    <div className='w-2/5 border-2 m-1 p-2 border-gray-100 '>
                     <h1 className='font-bold text-xl uppercase m-4'>{item.year}{item.name}</h1>
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
                         <div className='mt-6 ml-2'>
                         <ButtonOutline>Rent</ButtonOutline>
                         </div>                        
                    </div>                  
                </div>
              ))} 
             {/* <button className='absolute top-0 right-10' onClick={toggleModal}>Close</button> */}
          </div>
           <button className='absolute top-2 right-4 cursor-pointer p-1 border-2 border-blue-500' onClick={toggleModal}>
            <AiOutlineClose size={24}/>
            </button>
        </div>
        </div>
        )}
        </>
          )
        }

export default Modal



// {modal &&(
//     <div className='modal'>
//             <div className='overlay'></div>
//               <div className='modal-content'>

//                 {/*View Product Details*/ }
//                 {viewProduct.map((item)=>(
//               <div className='productDetails' key={item.id}>
//                  <img className='product-img' src={item.imgUrl}/>
//                  <div className='productDescription'>
//                  <h2 className='product-name'>{item.name}</h2>
//                  <div className='itemPrice'>
//                  <p className='price'>{Rand.format(item.price)}</p>
//                  {(item.wasPrice) && <p className='wasPrice'>Was {Rand.format(item.wasPrice)}</p>}
//                  <div>
//                  <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
//                  {/* {cartItems.length >0 &&
//                 <Link to="/Ecommerce-store/cart"
//                 className="btn" onClick={() =>handleAddItem(item)}>  <TiShoppingCart size='1rem'/> View cart
//                 </Link>} */}
//                </div>
//                <Link to="" className='add-to-wish' onClick={() =>{AddWishListItem(item); toggleShown()}} key={item.id}>{isShown ? <BsFillHeartFill color="red" size='1.5rem'/> : <BsHeart color="gray" size='1.5rem'/>}</Link> 

//                {/* <button className='btn' onClick={() =>AddWishListItem(item)}>Add to Wish</button> */}
//              </div>
//              <h3>key features</h3>
//           <ul>
//             {(item.keyFeatures.RAM) && <li>{item.keyFeatures.RAM}</li>}
//             {(item.keyFeatures.drive) && <li>{item.keyFeatures.drive}</li>}
//              {(item.keyFeatures.processor) && <li>{item.keyFeatures.processor}</li>}
//              {(item.keyFeatures.screenSize) && <li>{item.keyFeatures.screenSize}</li>}
//              {(item.keyFeatures.OS) && <li>{item.keyFeatures.OS}</li>}
//              {(item.keyFeatures.warranty) && <li>{item.keyFeatures.warranty}</li>}
//           </ul>

//           <div className='icons'>
//           <p><GiReturnArrow size='1.5rem'/> Returnable</p>
//           <p><BsArrowRepeat size='1.5rem'/> Store exchange</p>
//           <p><BsStar size='1.5rem'/>{item.keyFeatures.warranty[0]} Year Warranty</p>
//           </div>

//           <div className='delivery'>
//             <p><BsTruck size='1.5rem'/> Get this product delivered to your doorstep within  5 days</p>
//             <br/>
//             <p><SlHome size='1.5rem'/> Store pick-up - <a href="#">Check availabilility</a></p>
//           </div>
//           </div>
//         </div>
//               ))} 
//             <button className='close-modal' onClick={toggleModal}>Close</button>
//             </div>
//           </div>
//         )}
