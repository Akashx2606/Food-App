import React, { useState } from 'react'
import { cloudinary_url } from "../constants"

const SubMenu = ({ obj }) => {
  const {title,itemCards} = obj.card.card
 // const arr = obj.card.card.itemCards;
  const[showitems,setShowitems] = useState(false)


  return (
    <div className="p-6 bg-red-100  rounded-lg w-6/12 mt-2 mx-auto ">
      {/* Title */}
      <div className='flex justify-between items-center' onClick={()=>{
           setShowitems(!showitems)
      }}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
       {showitems ? <span>⬆️</span>:<span>⬇️</span>}
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu
