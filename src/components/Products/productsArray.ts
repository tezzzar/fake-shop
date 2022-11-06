

type Product = {
  id:number,
  name: string
  description: string
  type: string
  capacity: number
  price: number
}

const productsArray: Product [] = [
{
  id:1,
  name:"iPhone X",
  description:"this is iPhone X",
  type:"phone",
  capacity:64,
  price:500,
},
{
  id:2,
  name:"iPhone XS",
  description:"this is iPhone XS",
  type:"phone",
  capacity:128,
  price:900,
},
{
  id:3,
	name:"iPhone 11",
	description:"this is iPhone 11",
	type:"phone",
	capacity:256,
	price:1500,
},
{
  id:4,
	name:"iPhone XR",
	description:"this is iPhone XR",
	type:"phone",
	capacity:128,
	price:700,
},
{
  id:5,
	name:"iPhone 12",
	description:"this is iPhone 12",
	type:"phone",
	capacity:256,
	price:900,
},
{
	id:6,
	name:"iPhone 13Pro",
	description:"this is iPhone 13Pro",
	type:"phone",
	capacity:512,
	price:1200,
}
]

export default productsArray