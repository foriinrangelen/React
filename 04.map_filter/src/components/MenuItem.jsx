import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

const MenuItem = ({ name, price, img }) => {
  //   console.log(name, img, price)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${img}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="secondary">주문하기</Button>
      </Card.Body>
    </Card>
  )
}

export default MenuItem
