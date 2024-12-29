import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      console.log("Use effect is running")
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      <Link to={"/admin/products/addProduct"} className="absolute right-[25px] bottom-[25px] text-[25px] border-[#3b82f6] border-[2px] text-[#3b82f6] p-5 rounded-xl hover:rounded-full"><FaPlus/></Link>
      
    

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

                    onClick={()=>{
                      alert(product.productId)
                      const token = localStorage.getItem("token");

                      axios.delete(`http://localhost:5000/api/products/${product.productId}`, {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }).then((res) => {
                        console.log(res.data);
                        toast.success("Product deleted successfully");
                        window.location.reload();
                      });
                    }}
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
