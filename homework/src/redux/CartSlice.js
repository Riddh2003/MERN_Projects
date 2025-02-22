import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        //state --> initialState -->cart..
        //action -->1)TYPE,2)payload
        //type="cart/addToCart" :switch case
        addToCart: (state, action) => {
            console.log(state)
            console.log(action)
            state.cart.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions // actions...
export default cartSlice.reducer // cartSlice as reducer