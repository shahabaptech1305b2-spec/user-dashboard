import React, { useState } from "react";
import LeftSideBar from "../../Components/User/leftSideBar";
import DashboardContent from "../../Components/User/content";

function Dashboard () {
    const [activeComponent, setActiveComponent] = useState('')

    const clickDashboard = () => {
        setActiveComponent("Dashboard")
    }
    const clickProducts = () => {
        setActiveComponent("Products")
    }
    const clickOrder = () => {
        setActiveComponent("Orders")
    }
    const clickCustomers = () => {
        setActiveComponent("Customers")
    }
    const clickAnalytics = () => {
        setActiveComponent("Analytics")
    }
    const clickProfileSetting = () => {
        setActiveComponent("Profile Settings")
    }

    const leftSideBarData = [
        {
            features: "Dashboard",
            onclick: clickDashboard
        },
        {
            features: "Products",
            onclick: clickProducts
        },
        {
            features: "Orders",
            onclick: clickOrder
        },
        {
            features: "Customers",
            onclick: clickCustomers
        },
        {
            features: "Analytics",
            onclick: clickAnalytics
        },
        {
            features: "Profile Settings",
            onclick: clickProfileSetting
        }
    ]
    return(

        /* Parent Div: Flex use kiya taake bache side-by-side ayein */
        <div className="flex min-h-screen bg-gray-100">
            
            {/* 1. Left Sidebar (Fixed Width) */}
            <div className="w-64 fixed inset-y-0 left-0 bg-gray-900 shadow-xl">
                <LeftSideBar leftSideBarFeatures={leftSideBarData} />
            </div>

            {/* 2. Main Right Content Area */}
            {/* 'ml-64' isliye taake content sidebar ke piche na chhup jaye */}
            <div className="flex-1 ml-64 p-8">
                {/* Header (Optional) */}
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-500">Welcome back, manager!</p>
                </header>

                {/* Dashboard Content */}
                <main className="bg-white rounded-2xl shadow-sm min-h-[80vh] p-6">
                    <DashboardContent activeComponent={activeComponent} />
                </main>
            </div>

        </div>
    
    )
}

export default Dashboard