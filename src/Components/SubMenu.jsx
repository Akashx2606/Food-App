import React from 'react'

const SubMenu = ({obj}) => {
    const title = obj.card.card.itemCards;
  return (
    <div>
        {title&& title.map((item)=>{
            const show = item.card.info
            return (
                
                <div>
                    <p>{show.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default SubMenu