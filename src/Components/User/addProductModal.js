import React, { useState } from 'react';
import { Plus, X, Upload, DollarSign, Tag, Package, Hash, activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Redux/ProductSlice/productSlice';

const AddProductModal = () => {

    const productDetails = useSelector((state) => state.product.items)
    const dispatch = useDispatch()

    const initialFormState = {
        id: '',
        name: "",
        category: "Electronics",
        price: "",
        stock: '',
        status: "In Stock",
        image: ""
    }

    const [formFields, setFormFields] = useState(initialFormState)

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setFormFields(initialFormState)
    }

    const handleInputChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFormFields({ ...formFields, image: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSaveProduct = () => {

        if (formFields.name && formFields.price && formFields.stock && formFields.status) {
            dispatch(addProduct(formFields))
            setFormFields(initialFormState)
            setIsOpen(false)
            alert("Product Added Successfully!")
        }
        else {
            alert("Fill Details")
        }
    }



    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={toggleModal}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition shadow-lg shadow-blue-100"
            >
                <Plus size={18} /> Add Product
            </button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleModal}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Add New Product</h3>
                                    <p className="text-xs text-gray-500 mt-1">Fill in the details to list a new item</p>
                                </div>
                                <button onClick={toggleModal} className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Form Fields */}
                            <form className="p-6 space-y-4">
                                {/* Product Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
                                    <div className="relative">
                                        <Package className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                        <input name="name" value={formFields.name} onChange={handleInputChange} type="text" placeholder="e.g. Wireless Headphones" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                                    </div>
                                </div>

                                {/* Price & Category */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Price ($)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                            <input name='price' value={formFields.price} onChange={handleInputChange} type="number" placeholder="0.00" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                        <div className="relative">
                                            <Tag className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                            <select name='category' value={formFields.category} onChange={handleInputChange} className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white">
                                                <option>Electronics</option>
                                                <option>Fashion</option>
                                                <option>Home Decor</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* STOCK & STATUS (New Section) */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Stock Quantity</label>
                                        <div className="relative">
                                            <Hash className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                            <input name='stock' value={formFields.stock} onChange={handleInputChange} type="number" placeholder="0" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                                        <div className="relative flex items-center h-[42px]">
                                            <select name='status' value={formFields.status} onChange={handleInputChange} className="w-full h-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white font-medium text-blue-600">
                                                <option value="In Stock" className="text-green-600 font-medium">🟢 In Stock</option>
                                                <option value="Out Of Stock" className="text-red-500 font-medium">🔴 Out Of Stock</option>
                                                <option value="Low Stock" className="text-gray-500 font-medium">⚪ Low Stock</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Upload Area */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Product Image</label>

                                    {/* Hidden Input */}
                                    <input
                                        type="file"
                                        id="product-image"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />

                                    {/* clickable Label as a container */}
                                    <label
                                        htmlFor="product-image"
                                        className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition cursor-pointer group"
                                    >
                                        {formFields.image ? (
                                            // Agar image select ho gayi hai toh uska preview dikhao
                                            <img src={formFields.image} alt="Preview" className="w-20 h-20 object-cover rounded-lg shadow-md" />
                                        ) : (
                                            // Warna icon aur text dikhao
                                            <>
                                                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition">
                                                    <Upload className="text-blue-500" size={24} />
                                                </div>
                                                <span className="text-sm text-gray-500 mt-2 font-medium">Click to upload</span>
                                                <span className="text-xs text-gray-400">PNG, JPG (max. 5MB)</span>
                                            </>
                                        )}
                                    </label>
                                </div>

                                {/* Footer Buttons */}
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    <button type="button" onClick={toggleModal} className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition active:scale-95">
                                        Cancel
                                    </button>
                                    <button onClick={handleSaveProduct} type="button" className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition active:scale-95">
                                        Save Product
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AddProductModal;