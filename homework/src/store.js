import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice';
import bankSlice from './redux/bankSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        bank: bankSlice
    }
})