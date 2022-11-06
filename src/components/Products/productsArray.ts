type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        name: 'iPhone X',
        description: 'this is iPhone X',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 2,
        name: 'iPhone XS',
        description: 'this is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 900,
        image: '/images/iphone-green.jpg',
    },
    {
        id: 3,
        name: 'iPhone 11',
        description: 'this is iPhone 11',
        type: 'phone',
        capacity: 256,
        price: 1500,
        image: '/images/iphone-grey.png',
    },
    {
        id: 4,
        name: 'iPhone XR',
        description: 'this is iPhone XR',
        type: 'phone',
        capacity: 128,
        price: 700,
        image: '/images/iphone-indigo.jpg',
    },
    {
        id: 5,
        name: 'iPhone 12',
        description: 'this is iPhone 12',
        type: 'phone',
        capacity: 256,
        price: 900,
        image: '/images/iphone-pink.jpg',
    },
    {
        id: 6,
        name: 'iPhone 13Pro',
        description: 'this is iPhone 13Pro',
        type: 'phone',
        capacity: 512,
        price: 1200,
        image: '/images/iphone-space.jpg',
    },
]

export default productsArray
