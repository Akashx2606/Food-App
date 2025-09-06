// import React, { useState } from 'react'
// import { cloudinary_url, dishesUrl1, dishesUrl2 } from '../constants';

// const Search = () => {
//     const[query , setQuery] = useState("")
//     const[display , setDisplay] = useState([])
//   return (
//     <div>
//         <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
//         <button onClick={()=>{
//             if(!query){
//                 return
//             }
//             const getData = async ()=>{
//                 const data = await fetch(dishesUrl1 + query + dishesUrl2)
//                 const json = await data.json()
//                // console.log(json)
//                 setDisplay(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards)
//                 console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1))
                
//             }
//             getData()
      
//         }}>
//             Search</button>
//             <div>
//                 {
//                     display && display.map((item)=>{
//                         const {imageId, name, price, category } = item.card.card.info ||{}
//                         return ( 
//                             <div>
//                                 <img src={cloudinary_url + imageId}/> 
//                                 <div>
//                                     <p>{name}</p>
//                                     <p>{category}</p>
//                                     <p>{price}</p>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//     </div>
//   )
// }

// export default Search



import React, { useState } from 'react'
import { cloudinary_url, dishesUrl1, dishesUrl2 } from '../constants';

const Search = () => {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Search Dishes
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Type a dish name and hit search.
        </p>

        {/* Search bar */}
        <div className="mt-6 flex items-stretch gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. paneer, biryani, dosa…"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition
                       focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
          <button
            onClick={() => {
              if (!query) return;
              const getData = async () => {
                const data = await fetch(dishesUrl1 + query + dishesUrl2);
                const json = await data.json();
                setDisplay(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
               // console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
              };
              getData();
            }}
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white font-medium shadow-sm
                       hover:bg-emerald-700 active:bg-emerald-800
                       focus:outline-none focus:ring-4 focus:ring-emerald-100"
          >
            Search
          </button>
        </div>

        {/* Results grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {display &&
            display.map((item, idx) => {
              const { imageId, name, price, category } = item.card.card.info || {};
              return (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition
                             hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={cloudinary_url + imageId}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                        {name}
                      </h3>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                        {category}
                      </span>
                    </div>

                    <div className="mt-2">
                      <p className="text-lg font-semibold text-gray-900">
                        ₹{(price/100).toFixed(2) || "149"}
                      </p>
                    </div>

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
    </div>
  );
};

export default Search;






