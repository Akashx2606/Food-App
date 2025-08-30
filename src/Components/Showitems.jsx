import React, { useEffect, useState } from 'react'
import { dishesUrl1, dishesUrl2 } from '../constants'
import { useParams } from 'react-router-dom'
import { dishescloud } from '../constants'


const Showitems = () => {
  const[show ,setShow] = useState([])
  const{query} = useParams()

  useEffect(()=>{
  async function getData(){  
        const data = await fetch(dishesUrl1 + query + dishesUrl2)
       const json = await data.json()
       setShow(json)
      // console.log(json)
       setShow(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1))
      console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1))
      
      
    }
    getData()
   // console.log(show)
  },[query])
  return (
     <div>
       {show && show.map((item)=>{
        const imgid = item.card.card.info.imageId
       return ( <div>
        <img src={imgid ? dishescloud+imgid : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCPhfvD2LD1EPzr-7xzpuSjlhJZQU-iMU8w&s"}/>
        {item.card.card.info.name }
        </div>)

     })} 
      
   </div>
  )
}

export default Showitems








// {show && show.map((item)=>{
   //      const imgid = item.card.card.info.imageId
   //     return ( <div><img src={imgid ? dishescloud+imgid : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCPhfvD2LD1EPzr-7xzpuSjlhJZQU-iMU8w&s"}/>
    //     {item.card.card.info.name }</div>)

  //    })} 