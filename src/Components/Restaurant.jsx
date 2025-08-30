import React from 'react'
import { resta_url } from '../constants'
import { Link } from 'react-router-dom'


const Restaurant = ({img,name,locality,resId}) => {
  return (
    <Link to={`/menu/:${resId}`}>
    <div>
        <img src={resta_url+ img}/>
        <p>{name}</p>
        <p>{locality}</p>
    </div>
    </Link>
  )
}

export default Restaurant