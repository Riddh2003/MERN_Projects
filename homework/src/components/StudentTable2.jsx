import React from 'react'
import { useSelector } from 'react-redux'

export const StudentTable2 = () => {
    const student = useSelector((state) => state.student.students);
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-2xl'>Student Table2</h1>
            <table className='table-auto border-collapse border-2 border-purple-800 w-1/2'>
                <thead className='bg-purple-800 text-white'>
                    <tr>
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
