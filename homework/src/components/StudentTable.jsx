import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterStudent } from '../redux/studentRecordSlice';

export const StudentTable = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student.students);

    const filterHandler = (age) => {
        dispatch(filterStudent(age));
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-2xl'>Student Table</h1>
            <input type="text" className='border-2 p-2 border-black rounded' onChange={(event) => { filterHandler(event.target.value) }} />
            <table className='table-auto border-collapse border-2 border-purple-800 w-1/2'>
                <thead>
                    <tr className='bg-purple-800 text-white'>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student?.map((student) => {
                            return <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
