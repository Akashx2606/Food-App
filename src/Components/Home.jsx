import React,{useEffect, useState} from 'react'
import {  swigyApi, } from '../constants'
import { Link } from 'react-router-dom'
import Restaurant from './Restaurant'
import Carousal from './Carousal'


const Home = () => {
   const[show , setShow] = useState([])
      const[recommendation , setRecommendation] = useState([])
      const[restaurants , setRestaurants] = useState([])
      useEffect(()=>{
         async function getdata(){
              const data = await fetch(swigyApi)
              const json = await data.json()
              setShow(json)
             // console.log(json)
              setRecommendation(json.data.cards[0].card.card.imageGridCards.info)
              setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            //  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
              //console.log(json.data.cards[0].card.card.imageGridCards.info)
             // setTop(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
          }
          getdata()
      },[])
  return (
    <div >
    <div >  
             {
          recommendation && (
           <div className="my- p-4 bg-gray-100 rounded-lg shadow-lg">
             <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What's on your mind?
      </h1>
      <Carousal data={recommendation}  />
    </div>
  )
}
   
          </div>
          
          <div className="mx-auto max-w-8xl px-8 py-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Restaurants</h1>
            <div className='grid grid-cols-4 justify-center  '>
              {restaurants && restaurants.map((item)=>{
                return( <Restaurant img={item.info.cloudinaryImageId}
                   name={item.info.name}
                    key={item.info.id}
                    locality={item.info.locality}
                    resId={item.info.id}
                     />)
              })}
              </div>
          </div>
          </div>
          

 
    //       <div> <p className="text-2xl font-bold ">Top restaurant chains in Allahabad</p>
    //       <div style={{display:"grid" ,gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", gap:"10px",}}>
    //         {top && top.map((item)=>{
    //           return (
    //             <div className="w-[283px] h-[182px] ">
    //             <img src={topRest + item.info.cloudinaryImageId}/>
    //           </div>
    //           )
    //         })}
    //         </div>
    //       </div>
     
    // </div>
  )
}

export default Home