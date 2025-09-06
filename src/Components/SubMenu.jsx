import React, { useState } from 'react'
import { cloudinary_url } from "../constants"
import { useDispatch } from 'react-redux'
import {addItem , removeitem} from "../Redux/CartSlice";

const SubMenu = ({ obj }) => {
  const {title,itemCards} = obj.card.card
 // const arr = obj.card.card.itemCards;
  const[showitems,setShowitems] = useState(false)
  const dispatch = useDispatch()


  return (
    <div className="p-6 bg-red-100  rounded-lg w-6/12 mt-2 mx-auto" >
      {/* Title */}
      <div className='flex justify-between items-center' onClick={()=>{
           setShowitems(!showitems)
      }} >
      <h2 className="text-2xl font-bold mb-4" >{title}</h2>
       {showitems ? <span className='cursor-pointer'>⬆️</span>:<span className='cursor-pointer'>⬇️</span>}
     </div>
      {/* Items */}
      <div className="space-y-4">
        {showitems && itemCards && itemCards.map((item, index) => {
          let showData = item.card.info
          const { name, price, imageId, description } = showData

          return (
            <div
              key={index}
              className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-md transition"
            >
              {/* Left: Image */}
              <img
                src={cloudinary_url + imageId} 
                alt={name}
                className="w-24 h-20 object-cover rounded-md mr-4"
              />

              {/* Right: Content */}
              <div className="ml-4 flex flex-col">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
                <p className="text-green-600 font-bold mt-1">
                  ₹{(price / 100).toFixed(2)}
                </p>
              </div>
                            <button onClick={()=>{
                              dispatch(removeitem(item.card.info))
                            }}
                            className="inline-flex items-center justify-center
                bg-[#f44336] px-3 py-1 text-white font-medium 
                shadow hover:bg-rose-700 active:bg-rose-800 
                focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 
                focus-visible:ring-offset-2 rounded-tl-[0.9rem] rounded-bl-[0.9rem]"
                aria-label="Decrease">–</button>

            <button onClick={()=>{
              dispatch(addItem({...showData,quantity : 1}))
            }}
            className="inline-flex items-center justify-center  
            bg-[#04AA6D] px-3 py-1 text-white font-medium 
            shadow hover:bg-emerald-700 active:bg-emerald-800 
            focus:outline-none focus-visible:ring-2 
            focus-visible:ring-emerald-500 
            focus-visible:ring-offset-2 rounded-tr-[0.9rem] 
            rounded-br-[0.9rem]"
               aria-label="Increase">+</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu
