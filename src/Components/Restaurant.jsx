// import React from 'react'
// import { cloudinary_url } from '../constants'
// import { Link } from 'react-router-dom'


// const Restaurant = ({img,name,locality,resId}) => {
//   return (
//     <Link to={`/menu/${resId}`}>
//     <div>
//         <img src={cloudinary_url+ img}/>
//         <p>{name}</p>
//         <p>{locality}</p>
//     </div>
//     </Link>
//   )
// }

// export default Restaurant



import React from "react";
import { cloudinary_url } from "../constants";
import { Link } from "react-router-dom";

const Restaurant = ({ img, name, locality, resId }) => {
  return (
    
   
   
     <Link to={`/menu/${resId}`}>
      
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer m-5 ">
        
        <img
          src={cloudinary_url + img}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800 truncate">{name}</p>
          <p className="text-sm text-gray-500 mt-1">{locality}</p>
        </div>
      </div>
    </Link>

  );
};

export default Restaurant;

