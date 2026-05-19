import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../Redux/ProductSlice/productSlice"


export default configureStore ({
    reducer: {
        product: productReducers
    }
})