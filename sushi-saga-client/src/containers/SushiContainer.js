import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        <Sushi />
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer