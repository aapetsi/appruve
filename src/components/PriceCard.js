import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
  const handleSubscription = (e) => {
    axios
      .post('http://localhost:3001/subscriptions', {
        category: details.category,
      })
      .then((res) => {
        console.log(res)
        console.log(res.data)
        if (res.status === 200 || res.status === 201) {
          alert('Your subscription has been submitted successfully')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
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

      <Button onClick={handleSubscription}>Subscribe</Button>
    </Card>
  )
}

export default PriceCard
