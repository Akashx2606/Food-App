// import React, { useEffect, useState } from 'react'
// import { dishesUrl1, dishesUrl2 } from '../constants'
// import { useParams } from 'react-router-dom'
// import { cloudinary_url } from '../constants'


// const Showitems = () => {
//   const[show ,setShow] = useState([])
//   const{query} = useParams()

//   useEffect(()=>{
//   async function getData(){  
//         const data = await fetch(dishesUrl1 + query + dishesUrl2)
//        const json = await data.json()
//        setShow(json)
//       // console.log(json)
//        setShow(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1))
//       //console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1))
      
      
//     }
//     getData()
//    // console.log(show)
//   },[query])
//   return (
//      <div>
//        {show && show.map((item)=>{
//         const imgid = item.card.card.info.imageId
//        return ( <div>
//         <img src={imgid ? cloudinary_url+imgid : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCPhfvD2LD1EPzr-7xzpuSjlhJZQU-iMU8w&s"}/>
//         {item.card.card.info.name }
//         </div>)

//      })} 
      
//    </div>
//   )
// }

// export default Showitems








import React, { useEffect, useState } from "react";
import { dishesUrl1, dishesUrl2 } from "../constants";
import { useParams } from "react-router-dom";
import { cloudinary_url } from "../constants";

const Showitems = () => {
  const [show, setShow] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await fetch(dishesUrl1 + query + dishesUrl2);
      const json = await data.json();
      setShow(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
    }
    getData();
  }, [query]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Available Dishes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {show &&
          show.map((item, index) => {
            const imgid = item.card.card.info.imageId;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={
                    imgid
                      ? cloudinary_url + imgid
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCPhfvD2LD1EPzr-7xzpuSjlhJZQU-iMU8w&s"
                  }
                  alt={item.card.card.info.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.card.card.info.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.card.card.info.category || "Delicious Dish"}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{(item.card.card.info.price/100).toFixed(2) || "149"}
                  </p>
                  <div className="mt-4">
                      <button
                        className="w-full rounded-xl bg-emerald-600 px-3 py-2 text-sm font-medium text-white
                                   shadow-sm transition hover:bg-emerald-700 active:bg-emerald-800
                                   focus:outline-none focus:ring-4 focus:ring-emerald-100"

                      >
                        Add to cart
                      </button>
                    </div>

                </div>
                
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Showitems;








