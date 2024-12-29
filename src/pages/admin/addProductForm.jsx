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
  const navigate = useNavigate();

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");
    const imgUrls = imageUrls.split(",");

    const product = {
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
      await axios.post("http://localhost:5000/api/products", product, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) {
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-3">
     <h1 className="text-base font-bold text-blue-600 mb-3">Add Product Form</h1>
      <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm">
        <div className="space-y-1">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium">Product ID</label>
            <input
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
              type="text"
              className="mt-1 p-1 border rounded focus:outline-none focus:ring focus:ring-blue-500 text-sm"
              placeholder="Comma-separated values"
              value={imageUrls}
              onChange={(e) => setImageUrls(e.target.value)}
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
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
