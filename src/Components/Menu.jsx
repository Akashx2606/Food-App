import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Menu_api } from '../constants'

const Menu = () => {
   const{resId} = useParams()
   const[menu ,setMenu] = useState([])

   useEffect(()=>{
    const getData = async() => {
        const data = await fetch(Menu_api +  resId)
        const json = data.json()
        console.log(json)

    }
   })
  return (
    <div>Menu</div>
  )
}

export default Menu