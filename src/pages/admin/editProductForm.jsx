import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function EditProductForm() {
  const location = useLocation()
  const navigate = useNavigate()

  const product = location.state.product

  const altNames = product.altNames.join(",")

  if(product == null){
    navigate("/admin/products")
  }

  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(altNames);
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);
  
  

  console.log(location)

  async function handleSubmit() {
    const altNames = alternativeNames.split(",")

    const promisesArray = []
    let imgUrls = product.images
    if(imageFiles.length > 0){
    
    for(let i=0; i<imageFiles.length; i++){
      promisesArray[i] = uploadMediaToSupabase(imageFiles[i])
    }
   
    imgUrls = await Promise.all(promisesArray)
  }

   
    const productData = {
      productId: productId,
      productName: productName,
      altNames: altNames,
      images: imgUrls,
      price: price,
      lastPrice: lastPrice,
      stock: stock,
      description: description,
    };

    const token = localStorage.getItem("token");
    try {
      await axios.put("http://localhost:5000/api/products/"+product.productId, productData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      navigate("/admin/products");
      toast.success("Product updated successfully");
    } catch (err) {
      toast.error("Failed to update product");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-3">
     <h1 className="text-base font-bold text-blue-600 mb-3">Edit Product Form</h1>
      <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm">
        <div className="space-y-1">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Product ID</label>
            <input
              disabled
              type="text"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Product Name</label>
            <input
              type="text"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Alternative Names</label>
            <input
              type="text"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Comma-separated values"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Image URLs</label>
            <input
              type="file"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Comma-separated values"
              onChange={(e) => {
                setImageFiles(e.target.files)
              }}
              multiple
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Price</label>
            <input
              type="number"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Last Price</label>
            <input
              type="number"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Enter Last Price"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Stock</label>
            <input
              type="number"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Enter Stock Quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Description</label>
            <textarea
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Enter Description"
              rows="1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-1 rounded hover:bg-blue-700 text-sm transition"
            onClick={handleSubmit}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}
