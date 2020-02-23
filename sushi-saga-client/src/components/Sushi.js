import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushiInfo: {id, img_url, name, price}, eatSushi, eaten} = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id)}>
        { 
          eaten
          ?
            null
          :
            <img src={img_url} width="50%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi