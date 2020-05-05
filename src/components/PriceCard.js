import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Card = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid grey;
  border-radius: 10px;
  background: #6677e1;
`

const Button = styled.button`
  width: 150px;
  text-align: center;
  margin: 0 auto;
  margin-top: 18px;
  border-radius: 5px;
  height: 32px;

  &:hover {
    background: white;
    cursor: pointer;
  }
`

const Details = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
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
        } else {
          alert('Oops something went wrong with your order.')
        }
      })
      .catch((err) => {
        console.log(err)
        alert('Oops something went wrong with your order.')
      })
  }
  return (
    <Card>
      <h1>{details.category.toUpperCase()}</h1>
      <h2>{details.price}</h2>
      <Details>
        <span>Feature 1</span>
        <span>
          {details.item1 === true ? (
            <span>&#10004;</span>
          ) : (
            <span>&#10007;</span>
          )}
        </span>
      </Details>

      <Details>
        <span>Feature 2</span>
        <span>
          {details.item2 === true ? (
            <span>&#10004;</span>
          ) : (
            <span>&#10007;</span>
          )}
        </span>
      </Details>

      <Details>
        <span>Feature 3</span>
        <span>
          {details.item3 === true ? (
            <span>&#10004;</span>
          ) : (
            <span>&#10007;</span>
          )}
        </span>
      </Details>

      <Button onClick={handleSubscription}>Subscribe</Button>
    </Card>
  )
}

export default PriceCard
