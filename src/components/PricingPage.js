import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
`

const PricingPage = () => {
  const [pricing, setPrices] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/plans')
      .then((res) => {
        setPrices([...res.data])
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <Container>
      {pricing.map((item) => (
        <PriceCard key={item.id} details={item} />
      ))}
    </Container>
  )
}

export default PricingPage
