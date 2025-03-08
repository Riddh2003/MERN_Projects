import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://node5.onrender.com/user/user";

const initialState = {
    content: {
        data: []
    },
    isLoading: false,
    error: null,
};

export const handleUsers = createAsyncThunk(
    "content/handleUsers",
    async ({ type, data }, { rejectWithValue }) => {
        try {
            let response;

            switch (type) {
                case "GET":
                    response = await axios.get(`${BASE_URL}/`);
                    console.log("GET Response:", response.data);
                    return response.data;

                case "POST":
                    response = await axios.post(`${BASE_URL}/`, data);
                    console.log("POST Response:", response.data);
                    return response.data;

                case "PUT":
                    console.log("PUT Request Data:", data);
                    const updateData = {
                        name: data.name,
                        email: data.email,
                        age: data.age
                    };
                    response = await axios.put(`${BASE_URL}/${data._id}`, updateData);
                    console.log("PUT Response:", response.data);
                    return response.data;

                case "DELETE":
                    await axios.delete(`${BASE_URL}/${data._id}`);
                    return data._id;

                default:
                    throw new Error("Invalid API Type");
            }
        } catch (error) {
            console.log("Error from handleUsers:", error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("Error Response Data:", error.response.data);
                console.log("Error Response Status:", error.response.status);
                console.log("Error Response Headers:", error.response.headers);
                return rejectWithValue(error.response.data.message || error.message);
            } else if (error.request) {
                // The request was made but no response was received
                console.log("Error Request:", error.request);
                return rejectWithValue("No response received from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error Message:", error.message);
                return rejectWithValue(error.message);
            }
        }
    }
);

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(handleUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;

                // Handle different action types
                const actionType = action.meta.arg.type;

                if (actionType === "GET") {
                    // For GET requests, replace the entire content object
                    state.content = action.payload;
                }
                else if (actionType === "POST") {
                    // For POST requests, add the new user to the content.data array
                    if (state.content && state.content.data) {
                        state.content.data.push(action.payload.data);
                    }
                }
                else if (actionType === "PUT") {
                    // For PUT requests, update the existing user in the content.data array
                    if (state.content && state.content.data) {
                        const updatedUser = action.payload.data;
                        state.content.data = state.content.data.map((user) =>
                            user._id === updatedUser._id ? updatedUser : user
                        );
                    }
                }
                else if (actionType === "DELETE") {
                    // For DELETE requests, remove the user from the content.data array
                    if (state.content && state.content.data) {
                        state.content.data = state.content.data.filter((user) => user._id !== action.payload);
                    }
                }
            })
            .addCase(handleUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "An error occurred";
            });
    },
});

export default contentSlice.reducer;
