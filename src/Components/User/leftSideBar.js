import { Link, useNavigate } from "react-router-dom";
import React from "react";

function LeftSideBar(props) {
    const {leftSideBarFeatures} = props
    const navigate = useNavigate()

    const handleSignOutBtn = () => {
       navigate("/")
    }

    return(
        <div className="h-full flex flex-col py-6">
            {/* Sidebar Logo / Brand */}
            <div className="px-6 mb-10">
                <h1 className="text-2xl font-black text-white tracking-tighter">
                    <span className="text-blue-500">E</span>-ADMIN
                </h1>
            </div>

            {/* Navigation List */}
            <ul className="flex-1 px-4 space-y-2">
                {leftSideBarFeatures.map((element, index) => {
                    return (
                        <li key={index}>
                            <button
                                type="button"
                                onClick={element.onclick}
                                className="w-full flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 group active:scale-95"
                            >
                                {/* Dot Indicator (Optional - Cool lagta hai) */}
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                
                                <span className="font-medium text-[15px]">
                                    {element.features}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Sidebar Footer (Logout wagera ke liye) */}
            <div className="px-6 pt-6 border-t border-gray-800">
                <button type="button" onClick={handleSignOutBtn} className="text-sm text-gray-500 hover:text-red-400 transition-colors">
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default LeftSideBar
