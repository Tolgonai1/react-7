import {createSlice} from "@reduxjs/toolkit";
import {productsReducer} from "./productsSlice.js";

const cartSlice = createSlice({
    name: "product",
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state,action)=>{
            const productIndex = state.cart.findIndex(item => item._id === action.payload._id)
            if(productIndex >=0){
                state.cart[productIndex].quantity +=1
            }else {
                const productQuantity = {...action.payload,quantity: 1}
                state.cart.push(productQuantity)
            }
        },
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer