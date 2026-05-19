import React from "react";
import { Edit, Trash2, Plus, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import AddProductModal from "./addProductModal";

function Product() {

    const productDetails = useSelector((state) => state.product.items)

   

    return (
        <div className="space-y-6">
            {/* 1. Header & Search Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                    <p className="text-gray-500 text-sm">Manage your store inventory</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                        />
                    </div>
                    {/* <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition shadow-lg shadow-blue-100">
                        <Plus size={18} /> Add Product
                    </button> */}
                    <AddProductModal></AddProductModal>
                </div>
            </div>

            {/* 2. Products Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600">Product</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600">Category</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600">ID</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600">Price</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600">Stock</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600">Status</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {productDetails.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover border" />
                                            <span className="font-semibold text-gray-800">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.id}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{product.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.stock} pcs</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${
                                            product.status === "In Stock" ? "bg-green-100 text-green-600" :
                                            product.status === "Low Stock" ? "bg-orange-100 text-orange-600" :
                                            "bg-red-100 text-red-600"
                                        }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product;