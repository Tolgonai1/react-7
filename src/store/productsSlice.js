import products from "./Data/products.json"
import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: products,
        value: 0
    },
    reducers: {
        increaseQuantity: (state,action)=>{
            state.value += 1
        }
    }
})

export const increaseAction = productsSlice.actions
export const productsReducer = productsSlice.reducer