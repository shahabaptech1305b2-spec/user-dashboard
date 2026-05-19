import React from "react";
// Agar aapne Lucide install ki hai to icons use karein, warna ye simple bhi acha lagega
import { ShoppingBag, Users, DollarSign, ArrowUpRight } from 'lucide-react';
import Product from "./products";
import Orders from "./orders";
import Customers from "./customer";
import Analytics from "./analytics"
import ProfileSettings from "./profileSettings";
import AddProductModal from "./addProductModal";

function DashboardContent (props) {
    const {activeComponent} = props

     const stats = [
        { label: "Total Revenue", value: "$54,230", icon: <DollarSign />, color: "bg-blue-500", trend: "+12.5%" },
        { label: "Total Orders", value: "1,482", icon: <ShoppingBag />, color: "bg-indigo-500", trend: "+8.2%" },
        { label: "New Customers", value: "850", icon: <Users />, color: "bg-emerald-500", trend: "+15.3%" },
    ];

    const getActiveComponent = () => {
        if (activeComponent === "Products"){
            return(
            <Product></Product>
            )
        }
        if (activeComponent === "Orders"){
            return(
                <Orders></Orders>
            )
        }
        if (activeComponent === "Customers"){
            return(
                <Customers></Customers>
            )
        }
        if (activeComponent === "Analytics"){
            return(
                <Analytics></Analytics>
            )
        }
        if (activeComponent === "Profile Settings"){
            return(
                <ProfileSettings></ProfileSettings>
            )
        }
        else {
            return(
            <div className="p-2 space-y-10">
            {/* 1. Header Section */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h2>
                    <p className="text-gray-500 font-medium">Monitoring your store's performance</p>
                </div>
                {/* <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95">
                    + Add New Product
                </button> */}
                 <AddProductModal></AddProductModal>
            </div>

            {/* 2. Professional Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="flex justify-between items-start">
                            <div className={`p-3 rounded-2xl ${item.color} text-white shadow-lg`}>
                                {item.icon}
                            </div>
                            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                {item.trend} <ArrowUpRight size={14} />
                            </span>
                        </div>
                        <div className="mt-6">
                            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{item.label}</p>
                            <h3 className="text-3xl font-black text-gray-800 mt-1">{item.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Main Data Area */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <h3 className="font-bold text-xl text-gray-800">Recent Sales</h3>
                    <button className="text-blue-600 font-bold text-sm hover:underline">View All</button>
                </div>
                
                {/* Table Placeholder */}
                <div className="p-6">
                    <div className="w-full space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400">#</div>
                                    <div>
                                        <p className="font-bold text-gray-800">Standard Package</p>
                                        <p className="text-xs text-gray-400">Transaction ID: TXN-982{i}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-800">$250.00</p>
                                    <p className="text-xs text-emerald-500 font-bold">Completed</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
        )
        }

    }
   

    return (
        <div>
        {getActiveComponent()}
        </div>
    );
}

export default DashboardContent;