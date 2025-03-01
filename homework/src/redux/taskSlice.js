import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
    },
    reducers: {
        //actions
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload, completed: false })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        }
    }
})

export const { addTask, deleteTask, toggleTask } = taskSlice.actions
export default taskSlice.reducer