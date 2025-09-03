// import React from 'react'
// import { useSelector } from 'react-redux'

// const Cart = () => {
//     const cartData = useSelector((store)=> store.cart)
//     console.log(cartData);
//   return (
    
//     <div>
//         {cartData.map((item)=>{
//             const {name,price,description,imageId,quantity} =item
//         })}
//     </div>
//   )
// }

// export default Cart

import React from "react";
import { useSelector } from "react-redux";
import { cloudinary_url } from "../constants";

const Cart = () => {
  const cartData = useSelector((store) => store.cart);

  return (
    <div className="p-6 bg-red-100  rounded-lg w-6/12 mt-2 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

      <div className="bg-white rounded-lg shadow divide-y">
        {cartData.length === 0 ? (
          <p className="p-4 text-gray-500">Your cart is empty</p>
        ) : (
          cartData.map((item, index) => {
            const { name, price, description, imageId, quantity } = item;

            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
              >
                {/* Left side - image + details */}
                <div className="flex items-center gap-4">
                  <img
                    src={
                      imageId
                        ? cloudinary_url + imageId
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCPhfvD2LD1EPzr-7xzpuSjlhJZQU-iMU8w&s"
                    }
                    alt={name}
                    className="w-20 h-20 rounded object-cover border"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{name}</h2>
                    <p className="text-sm text-gray-600">
                      {description || "Tasty food item"}
                    </p>
                    <p className="text-sm text-gray-700">
                      Quantity: <span className="font-medium">{quantity}</span>
                    </p>
                  </div>
                </div>

                {/* Right side - price */}
                <p className="text-green-600 font-bold text-lg">₹{price}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
