import { createSlice } from "@reduxjs/toolkit";

var students = [
    {
        id: 1,
        name: 'Ram',
        age: 20
    },
    {
        id: 2,
        name: 'Shyam',
        age: 21
    },
    {
        id: 3,
        name: 'Ghanshyam',
        age: 22
    }
]

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students: students
    },
    reducers: {
        //action
        filterStudent: (state, actions) => {
            state.students = students.filter((student) => student.age >= actions.payload)
        }
    }

})

export const { filterStudent } = studentSlice.actions;
export default studentSlice.reducer;