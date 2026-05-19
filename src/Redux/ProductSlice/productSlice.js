import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [
        { 
        id: 1, 
        name: "Wireless Headphones", 
        category: "Electronics", 
        price: "$120.00", 
        stock: 25, 
        status: "In Stock", 
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" 
    },
    { 
        id: 2, 
        name: "Smart Watch", 
        category: "Accessories", 
        price: "$199.00", 
        stock: 12, 
        status: "Low Stock", 
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" 
    },
    { 
        id: 3, 
        name: "Leather Wallet", 
        category: "Fashion", 
        price: "$45.00", 
        stock: 0, 
        status: "Out of Stock", 
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=100&h=100&fit=crop" 
    },
    { 
        id: 4, 
        name: "Gaming Mouse", 
        category: "Electronics", 
        price: "$60.00", 
        stock: 40, 
        status: "In Stock", 
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop" 
    }
    ]
}

const productSlice = createSlice (
    {
        name: "product",
        initialState,
        reducers: {
            addProduct: (state, action) => {

                const newId = state.items.length > 0 
                ? state.items[state.items.length -1].id + 1
                : 1

                const newProduct = {
                    ...action.payload,
                    id: newId
                }
                
               state.items.push(newProduct)
            }
          
        }
        
    }
)

export const { addProduct, editProduct } = productSlice.actions
export default productSlice.reducer