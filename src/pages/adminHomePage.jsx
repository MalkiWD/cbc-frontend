import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-4">
        <Link
          className="flex flex-row items-center w-full px-4 py-2 text-white hover:bg-blue-600 rounded-lg mb-2"
          to="/admin/dashboard"
        >
          <BsGraphUp className="mr-2" /> Dashboard
        </Link>
        <Link
          className="flex flex-row items-center w-full px-4 py-2 text-white hover:bg-blue-600 rounded-lg mb-2"
          to="/admin/products"
        >
          <MdOutlineInventory2 className="mr-2" /> Products
        </Link>
        <Link
          className="flex flex-row items-center w-full px-4 py-2 text-white hover:bg-blue-600 rounded-lg mb-2"
          to="/admin/order"
        >
          <AiOutlineShoppingCart className="mr-2" /> Orders
        </Link>
        <Link
        className="flex flex-row items-center w-full px-4 py-2 text-white hover:bg-blue-600 rounded-lg mb-2"
      to="/admin/order"
    >
      <AiOutlineUsergroupAdd className="mr-2" />Customers
    </Link>

      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen ">
        <Routes path="/*">
        <Route path="/" element={<h1>Dashboard</h1>}/>
        <Route path="/products" element={<AdminProductsPage/>}/>
        <Route path="/products/addProduct" element={<AddProductForm/>} />
        <Route path="/orders" element={<h1>Orders</h1>}/>
        <Route path="/customers" element={<h1>Customers</h1>}/>
        <Route path="/*" element={<h1>404 page not found</h1>}/>
        </Routes>
      </div>
      
    </div>
    
  );
}
