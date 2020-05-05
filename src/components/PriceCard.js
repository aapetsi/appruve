import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid grey;
  border-radius: 10px;
`

const Button = styled.button`
  width: 150px;
  text-align: center;
  margin: 0 auto;
`

const PriceCard = ({ details }) => {
  console.log(details)
  return (
    <Card>
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

      <Button>Subscribe</Button>
    </Card>
  )
}

export default PriceCard
