import { useEffect, useState } from "react"
import { loadCart } from "../../utils/cartFunction"
import CartCard from "../../components/cartCard"

export default function Cart(){
  const [cart,setCart]=useState([])

  useEffect(
    ()=>{
      setCart(loadCart())
    } , []
  )

  function onOrderCheckOutClick(){
    //send order to backend
    //clear cart
  }

  return(
    <div className="w-full h-full over-flow-y-scroll flex flex-col items-end">
      <table className="w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
      {
        cart.map(
          (item)=>{
            return(
              <CartCard key={item.productId} productId={item.productId} qty={item.qty}/>
            )
          }
        )
      }
      </table>
      <button className="bg-accent hover:bg-accent-light text-white p-2 rounded-lg w-[300px]">Check Out</button>
    </div>
    
  )
}