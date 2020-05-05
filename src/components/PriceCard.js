import React from 'react'
import styled from 'styled-components'

const Card = styled.div``

const PriceCard = ({ details }) => {
  console.log(details)
  return (
    <div>
      <h1>{details.category}</h1>
      <h2>{details.price}</h2>
      <div>
        <span>lorem ipsum sit dolor amet</span>
        <span>
          {details.item1 === true ? (
            <span>&#10004;</span>
          ) : (
            <span>&#10007;</span>
          )}
        </span>
      </div>

      <div>
        <span>lorem ipsum sit dolor amet</span>
        <span>
          {details.item2 === true ? (
            <span>&#10004;</span>
          ) : (
            <span>&#10007;</span>
          )}
        </span>
      </div>

      <div>
        <span>lorem ipsum sit dolor amet</span>
        <span>
          {details.item3 === true ? (
            <span>&#10004;</span>
          ) : (
            <span>&#10007;</span>
          )}
        </span>
      </div>

      <button>Subscribe</button>
    </div>
  )
}

export default PriceCard
