import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    content: [],
    isLoading: false,
    error: null
}

export const fetchuser = createAsyncThunk(
    "content/fetchuser",
    async () => {
        // console.log('call..')
        const res = await axios.get("https://node5.onrender.com/user/user")
        const data = res.data
        return data
    }
)

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchuser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchuser.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchuser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default contentSlice.reducer