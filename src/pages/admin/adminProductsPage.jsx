import axios from "axios";
import { useEffect, useState } from "react";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      <button className="absolute right-[25px] bottom-[25px] text-[25px] bg-[#3b82f6] text-white p-5 rounded-xl"><FaPlus/></button>
      <h1 className="text-2xl font-bold text-center mb-6">Admin Products Page</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Product ID</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Last Price</th>
              <th className="px-4 py-2 text-left">Stock</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-4 py-2">{product.productId}</td>
                <td className="px-4 py-2">{product.productName}</td>
                <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="px-4 py-2">${product.lastPrice.toFixed(2)}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2 truncate max-w-xs">{product.description}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FaPencil />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
