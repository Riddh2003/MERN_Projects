import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/CartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})