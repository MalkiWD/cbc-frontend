import axios from "axios"
import { useEffect, useState } from "react"
export default function AdminProductsPage(){

  const [products,setProducts] = useState([    {
        "_id": "67616343e0a398d2908e762e",
        "productId": "B2001",
        "productName": "Hydrating Face Serum",
        "altNames": [
            "Moisturizing Serum",
            "Skin Hydration Booster"
        ],
        "images": [
            "https://example.com/images/serum1.jpg",
            "https://example.com/images/serum2.jpg"
        ],
        "price": 29.99,
        "lastPrice": 39.99,
        "stock": 120,
        "description": "A lightweight, fast-absorbing hydrating serum enriched with hyaluronic acid and vitamin C to rejuvenate and moisturize the skin.",
        "__v": 0
    },
    {
        "_id": "676274592e7896fd03e98051",
        "productId": "B2002",
        "productName": "Hydrating Face Serum",
        "altNames": [
            "Moisturizing Serum",
            "Skin Hydration Booster"
        ],
        "images": [
            "https://example.com/images/serum1.jpg",
            "https://example.com/images/serum2.jpg"
        ],
        "price": 29.99,
        "lastPrice": 39.99,
        "stock": 120,
        "description": "A lightweight, fast-absorbing hydrating serum enriched with hyaluronic acid and vitamin C to rejuvenate and moisturize the skin.",
        "__v": 0
    }
    
]
)

useEffect(
  ()=>{
    axios.get("http://localhost:5000/api/products").then((res)=>{
      console.log(res.data)
      setProducts(res.data)
  }
)
  
},[]
)


  return (
    <div>
      <h1>Admin Products Page</h1>
      {
        products.map(
          (product,index)=> {
            return(
              <div key={product._id}>
                {index}
                {product.productName}
                </div>
            ) 
          }
        )
      }
    </div>
  )
}

