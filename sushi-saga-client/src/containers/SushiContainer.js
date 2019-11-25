import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
        props.currentSushis.map( sushi => 
          <Sushi 
            key={sushi.id} 
            sushiObj={sushi}
            eatenSushis ={props.eatenSushis}
            orderedSushis={props.orderedSushis}
          /> 
        )
        }
        <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer