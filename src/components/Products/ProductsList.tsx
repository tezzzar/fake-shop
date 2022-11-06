import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                sx={{
                    margin: '25px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    (
                        {
                            name,
                            description,
                            type,
                            capacity,
                            price,
                        }: ProductProps,
                        index
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
