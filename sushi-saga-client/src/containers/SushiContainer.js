import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = props => {
  const {servedSushi, eatSushi} = props;
  return (
    <Fragment>
      <div className="belt">
        {
          servedSushi.map(sushiInfo => 
            <Sushi 
              key={sushiInfo.id} 
              sushiInfo={sushiInfo}
              eatSushi={eatSushi}
            />
          )
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer