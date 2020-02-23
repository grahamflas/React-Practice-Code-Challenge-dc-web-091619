import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushiInfo: {id, img_url, name, price}, eatSushi, eatenSushi} = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id)}>
        { 
          eatenSushi.forEach(sushi => {
            if (sushi.id === id) return true
          })
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