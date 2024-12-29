import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(){
    const altNames = alternativeNames.split(",");
    const imgUrls = imageUrls.split(",");

    const product = {
     productId : productId,
     productName : productName,
     altNames : altNames,
     images : imgUrls,
     price : price,
     lastPrice : lastPrice,
     stock : stock,
     description : description
    }

    const token = localStorage.getItem("token")
    try{
      await axios.post("http://localhost:5000/api/products",product,{
        headers : {
          Authorization : "Bearer "+token
        }
      })
      navigate("/admin/products")
     toast.success("Product added successfully") 
    }catch(err){
     toast.error("Failed to add product")
      
    }
    
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Add Product Form</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="space-y-4" >
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Product ID</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Product Name</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Alternative Names</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Alternative Names (comma-separated)"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Image URLs</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Image URLs (comma-separated)"
              value={imageUrls}
              onChange={(e) => setImageUrls(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Price</label>
            <input
              type="number"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Last Price</label>
            <input
              type="number"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Last Price"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Stock</label>
            <input
              type="number"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Stock Quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Description</label>
            <textarea
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Product Description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleSubmit}>
            Add Product

          </button>
        </div>
      </div>
    </div>
  );
}
