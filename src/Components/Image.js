import React from 'react'
import { product } from '../product'
import { Card } from 'react-bootstrap'

const Image = () => {
    return (
        <div>
            <Card.Img variant="top" src={product.image} />
        </div>
    )
}

export default Image
