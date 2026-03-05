const products = [
    {id:1,name:"Product 1",price:25},
    {id:2,name:"Product 2",price:50},
    {id:3,name:"Product 3",price:45},
]

//Display all Products using forEach
function displayProduct(){
    products.forEach((product)=>{
    console.log(product)
})
}
displayProduct()

// Display Product with price above 40
function displayab40(){
    const newArr = products.filter((product)=>product.price>40)
    console.log(newArr)
}
displayab40()

// Add product 2 to cart using Spread Operator

// Process 1
// function AddProduct(){
//     const newAr = products.find((product) => product.name === "Product 2")
    
//     // console.log(newAr)

//     const Cart_Item = {...newAr,quantity:1}
//     const Cart = [Cart_Item]
//     console.log(Cart)
// }
// AddProduct()

// Process 2 
function AddProduct(){
    const cart = {...products[1],quantity:1}
    console.log(cart)
}
AddProduct()