import React from 'react'
import { resta_url } from '../constants'

const Restaurant = ({img,name}) => {
  return (
    <div>
        <img src={resta_url+ img}/>
        <p>{name}</p>
    </div>
  )
}

export default Restaurant