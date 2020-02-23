import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushiInfo: {id, img_url}, eatSushi} = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          true ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */} - ${/* Give me a price! */}
      </h4>
    </div>
  )
}

export default Sushi