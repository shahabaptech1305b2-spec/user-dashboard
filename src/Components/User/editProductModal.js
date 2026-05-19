import React, { useState, useEffect } from 'react';
import { X, Upload, DollarSign, Tag, Package, Hash, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../Redux/ProductSlice/productSlice';

const EditProductModal = ({ product, isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    
    // Local state jo existing product data se shuru hogi
    const [formFields, setFormFields] = useState(product);

    // Jab bhi 'product' prop change ho, state ko update karo
    useEffect(() => {
        setFormFields(product);
    }, [product]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormFields({ ...formFields, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = () => {
        if (formFields.name && formFields.price && formFields.stock) {
            dispatch(editProduct(formFields)); // Redux update
            setIsOpen(false); // Modal close
            alert("Product Updated!");
        } else {
            alert("Fields cannot be empty");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-blue-50/50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Edit Product</h3>
                                <p className="text-xs text-blue-600 font-medium">Update product details and stock</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white rounded-lg transition text-gray-400">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
                                <div className="relative">
                                    <Package className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                    <input name="name" value={formFields.name} onChange={handleInputChange} type="text" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>

                            {/* Price & Category */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Price</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                        <input name='price' value={formFields.price} onChange={handleInputChange} type="text" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                    <select name='category' value={formFields.category} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                        <option value="Electronics">Electronics</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>
                            </div>

                            {/* Stock & Status */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Stock</label>
                                    <input name='stock' value={formFields.stock} onChange={handleInputChange} type="number" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                                    <select name='status' value={formFields.status} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium text-blue-600">
                                        <option value="In Stock">🟢 In Stock</option>
                                        <option value="Low Stock">🟠 Low Stock</option>
                                        <option value="Out of Stock">🔴 Out of Stock</option>
                                    </select>
                                </div>
                            </div>

                            {/* Image Update */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Update Image</label>
                                <input type="file" id="edit-image" className="hidden" onChange={handleImageChange} />
                                <label htmlFor="edit-image" className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center gap-4 bg-gray-50 cursor-pointer hover:bg-blue-50 transition">
                                    <img src={formFields.image} alt="current" className="w-12 h-12 rounded object-cover border bg-white" />
                                    <span className="text-sm text-blue-600 font-medium">Click to change photo</span>
                                </label>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button type="button" onClick={() => setIsOpen(false)} className="flex-1 py-3 border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition">Cancel</button>
                                <button onClick={handleUpdate} type="button" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg transition flex items-center justify-center gap-2">
                                    <Save size={18} /> Update
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EditProductModal;