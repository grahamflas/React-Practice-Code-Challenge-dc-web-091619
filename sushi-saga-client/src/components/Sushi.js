import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {id, img_url, name, price} = props.sushiObj
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatenSushis(props.sushiObj)}>
        { 
          props.orderedSushis.includes(props.sushiObj) ===
          true ?
            null
          :
            <img src={img_url} width="100%" />
          }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi