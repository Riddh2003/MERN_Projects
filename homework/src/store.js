import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice';
import bankSlice from './redux/bankSlice';
import themeSlice from './redux/themeSlice';
import studentSlice from './redux/studentRecordSlice';
import taskSlice from './redux/taskSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        bank: bankSlice,
        theme: themeSlice,
        student: studentSlice,
        task: taskSlice
    }
})