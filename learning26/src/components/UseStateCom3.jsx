import React, { useState } from 'react'

export const UseStateCom3 = () => {
    const [object,setObject] = useState({
        id:1,
        name:"Riddh",
        age:22
    });
    const ChangeObj =()=>{
        setObject({
            ...object,
            salary:200000
        })
    }
    return (
        <div>
            <h1>Id : {object.id}</h1>
            <h1>Name : {object.name}</h1>
            <h1>Age : {object.age}</h1>
            {
                object.salary && <h1>Salary : {object.salary}</h1>
            }
            <button onClick={()=>{ChangeObj()}}>Change Object Value</button>
        </div>
    )
}
