import React from 'react'
import { College } from './College';

export const University = () => {
    var students = ['Riddh', 'Sumit', 'Ra', "Ram"];
    const checkUni = () => {
        console.log("University status check...");
    }
    return (
        <div>
            {
                students.map((student) => {
                    return (
                        // <h1 style={{ color: student.length > 3 ? "green" : "red" }}>{student}</h1>
                        <h1>
                            <span>{student}</span>
                            <span style={{color: student.length>3?"green":"red"}}>{student}</span>
                        </h1>
                    )
                })
            }
            <College check={checkUni}></College>
        </div>
    )
}
