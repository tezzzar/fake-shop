import { Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>iPhone X</h4>
                <p>This is description</p>
                <div>Type: phone</div>
                <div>Capacity: 64 Gb</div>
                <div>Price: 500$</div>
            </CardContent>
            <CardActions>
                <button>Add to cart</button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
