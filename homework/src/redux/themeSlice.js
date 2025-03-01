import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'white'
    },
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === 'white' ? 'black' : 'white';
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;