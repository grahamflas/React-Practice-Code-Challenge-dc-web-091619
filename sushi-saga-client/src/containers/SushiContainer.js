import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = props => {
  const {servedSushi, eatSushi, eatenSushi, serveSushi} = props;
  return (
    <Fragment>
      <div className="belt">
        {
          servedSushi.map(sushiInfo => 
            <Sushi 
              key={sushiInfo.id} 
              sushiInfo={sushiInfo}
              eatSushi={eatSushi}
              eaten={eatenSushi.includes(sushiInfo)}
            />
          )
        }
        <MoreButton serveSushi={serveSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer